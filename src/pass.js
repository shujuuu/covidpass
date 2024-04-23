'use strict';

const constants = require('./constants')
const utils = require('./utils')

const { Payload } = require('./payload')
const { toBuffer } = require('do-not-zip')
const crypto = require('crypto')

exports.createPass = async function(data) {
  /**
   * @description creates a SHA-1 hash of a given buffer using the `crypto.createHash()`
   * method and returns the resulting hexadecimal digest as a string.
   * 
   * @param { binary message. } buffer - 16-byte value that is to be hashed using the
   * SHA-1 algorithm, which is then returned as a hexadecimal string.
   * 
   * 		- Type: `Uint8Array` representing an array of 16-bit little-endian integers
   * 		- Length: The number of bytes in the buffer, which is equivalent to the length
   * of the SHA-1 hash output
   * 		- Data: A reference to the raw binary data stored in the buffer
   * 
   * 	The function uses the `crypto.createHash()` method to create a new instance of
   * the SHA-1 algorithm, passing `'sha1'` as the hash algorithm parameter. The updated
   * method is then used to process the buffer data through the hash algorithm, and the
   * resulting SHA-1 hash value is returned in hexadecimal format using `digest()` method.
   * 
   * @returns { string } a hexadecimal string representing the SHA-1 hash of the input
   * buffer.
   */
  function getBufferHash(buffer) {
    // creating hash
    const sha = crypto.createHash('sha1');
    sha.update(buffer);
    return sha.digest('hex');
  }

  /**
   * @description generates a zip file containing required files for signing a pass,
   * including the pass JSON hash, icon files, and manifest file. It then uploads the
   * zip file to a Next.js backend API for signature verification and returns the
   * signature as an array buffer.
   * 
   * @param { JavaScript `JSON`. } pass - 256-bit passphrase for encryption and signing,
   * which is used to generate a hash value that is attached to the manifest file as a
   * signature.
   * 
   * 		- `pass`: The Pass JSON object containing the user's pass information, including
   * their username, password, and email address.
   * 		- `payload`: An object containing the Icon file path and URL for dark mode.
   * 		- `getBufferHash`: A function that computes the hash of a buffer.
   * 		- `API_BASE_URL`: The base URL for Next.js API endpoint.
   * 
   * @param { object } payload - 2x logo and icon, which are used for the signature
   * generation and added to the ZIP file as separate files.
   * 
   * @returns { array } a buffer containing a Zip file with various files and manifest
   * signature.
   */
  async function signPassWithRemote(pass, payload) {
    // From pass-js
    // https://github.com/walletpass/pass-js/blob/2b6475749582ca3ea742a91466303cb0eb01a13a/src/pass.ts

    // Creating new Zip file
    const zip = []

    // Adding required files
    // Create pass.json
    zip.push({ path: 'pass.json', data: Buffer.from(JSON.stringify(pass)) })
    const passHash = getBufferHash(Buffer.from(JSON.stringify(pass)))

    zip.push({ path: 'icon.png', data: payload.img1x })
    zip.push({ path: 'icon@2x.png', data: payload.img2x })
    zip.push({ path: 'logo.png', data: payload.img1x })
    zip.push({ path: 'logo@2x.png', data: payload.img2x })

    // adding manifest
    // Construct manifest here
    /**
     * @description takes an object `res` and a pair of path-and-data arguments. It updates
     * `res` by computing a hash for the provided data using `getBufferHash()` and adding
     * it to the path in `res`.
     * 
     * @param { object } res - returned result of the function, which is an object that
     * maps path to a hash buffer value after applying the `getBufferHash()` function to
     * the provided `data`.
     * 
     * @param { string } path - location in the response where the result of the
     * `getBufferHash()` function will be stored.
     * 
     * @param { object } data - data to be processed and is used to generate a buffer
     * hash value, which is then stored in the `res` output object at the specified path.
     * 
     * @returns { object } a modified version of the input `res` object, with the addition
     * of a hash value for each data item.
     */
    const manifestJson = JSON.stringify(
      zip.reduce(
        (res, { path, data }) => {
          res[path] = getBufferHash(data);
          return res;
        },
        {},
      ),
    );
    zip.push({ path: 'manifest.json', data: manifestJson });

    // Load API_BASE_URL form nextjs backend
    const configResponse = await fetch('/api/config')
    const apiBaseUrl = (await configResponse.json()).apiBaseUrl

    const response = await fetch(`${apiBaseUrl}/sign`, {
        method: 'POST',
        headers: {
          'Accept': 'application/octet-stream',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          PassJsonHash: passHash,
          useBlackVersion: !payload.dark
        })
    })

    if (response.status !== 200) {
      return undefined
    }

    const manifestSignature = await response.arrayBuffer()

    zip.push({ path: 'signature', data: Buffer.from(manifestSignature) });

    // finished!
    return toBuffer(zip);
  }

  let valueSets

  try {
    valueSets = await utils.getValueSets()
  } catch {
    return undefined
  }

  let payload

  try {
    payload = new Payload(data, valueSets)
  } catch (e) {
    return undefined
  }

  const qrCode = {
    message: payload.raw,
    format: "PKBarcodeFormatQR",
    messageEncoding: "utf-8"
  }

  const pass = {
    passTypeIdentifier: constants.PASS_IDENTIFIER,
    teamIdentifier: constants.TEAM_IDENTIFIER,
    sharingProhibited: false,
    voided: false,
    formatVersion: 1,
    logoText: constants.NAME,
    organizationName: constants.NAME,
    description: constants.NAME,
    labelColor: payload.labelColor,
    foregroundColor: payload.foregroundColor,
    backgroundColor: payload.backgroundColor,
    serialNumber: payload.uvci,
    barcodes: [qrCode],
    barcode: qrCode,
    generic: {
      headerFields: [
        {
          key: "type",
          label: "Certificate Type",
          value: payload.certificateType
        }
      ],
      primaryFields: [
        {
          key: "name",
          label: "Name",
          value: payload.name
        }
      ],
      secondaryFields: [
        {
          key: "dose",
          label: "Dose",
          value: payload.dose
        },
        {
          key: "dov",
          label: "Date of Vaccination",
          value: payload.dateOfVaccination,
          textAlignment: "PKTextAlignmentRight"
        }
      ],
      auxiliaryFields: [
        {
          key: "vaccine",
          label: "Vaccine",
          value: payload.vaccineName
        },
        {
          key: "dob",
          label: "Date of Birth", value:
          payload.dateOfBirth,
          textAlignment: "PKTextAlignmentRight"
        }
      ],
      backFields: [
        {
          key: "uvci",
          label: "Unique Certificate Identifier (UVCI)",
          value: payload.uvci
        },
        {
          key: "issuer",
          label: "Certificate Issuer",
          value: payload.certificateIssuer
        },
        {
          key: "country",
          label: "Country of Vaccination",
          value: payload.countryOfVaccination
        },
        {
          key: "manufacturer",
          label: "Manufacturer",
          value: payload.manufacturer
        },
        {
          key: "disclaimer",
          label: "Disclaimer",
          value: "This certificate is only valid in combination with the ID card of the certificate holder and expires one year + 14 days after the last dose. The validity of this certificate was not checked by CovidPass."
        }
      ]
    }
  };

  return await signPassWithRemote(pass, payload)
}
