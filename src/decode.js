// Taken from https://github.com/ehn-dcc-development/ehn-sign-verify-javascript-trivial/blob/main/cose_verify.js
// and https://github.com/ehn-dcc-development/dgc-check-mobile-app/blob/2c2ebf4e9b7650ceef44f7e1fb05a57572830c5b/src/app/cose-js/sign.js

const base45 = require('base45-js')
const zlib = require('pako')
const cbor = require('cbor-js')

/**
 * @description retrieves a portion of a typed array and converts it to a buffer.
 * 
 * @param { array } array - typed array to be converted into a buffer.
 * 
 * @returns { array } a buffer slice of the input typed array.
 */
export function typedArrayToBufferSliced(array) {
  return array.buffer.slice(array.byteOffset, array.byteLength + array.byteOffset)
}

/**
 * @description creates a new `ArrayBuffer` object with the same length as the input
 * `typedarray`. It then maps the elements of the `typedarray` to the corresponding
 * positions in the `ArrayBuffer`, creating a binary representation of the original
 * data. The function returns the `ArrayBuffer` object representing the original data.
 * 
 * @param { array } array - 1D or 2D typed array to be converted into a buffer.
 * 
 * @returns { array } a `Buffer` object containing the same data as the input `array`.
 */
export function typedArrayToBuffer(array) {
  var buffer = new ArrayBuffer(array.length)

  array.map(function(value, i) {
    buffer[i] = value
  })
  return array.buffer
}

/**
 * @description converts an array-buffer object `ab` into a Buffer object, storing
 * the corresponding bytes in a new buffer.
 * 
 * @param { array } ab - binary data to be converted into a buffer, providing its
 * length to determine the size of the buffer to allocate.
 * 
 * @returns { `Buffer`. } a buffer object containing the same data as the original
 * array buffer.
 * 
 * 		- `buf`: A `Buffer` object representing the transformed data. It has a length
 * property that specifies the number of bytes in the buffer, and an array property
 * that stores the buffer's contents as a 1D array of integer values between 0 and 255.
 */
export function toBuffer(ab) {
  var buf = Buffer.alloc(ab.byteLength)
  var view = new Uint8Array(ab)

  for (var i = 0; i < buf.length; ++i) {
      buf[i] = view[i]
  }
  return buf
}

/**
 * @description takes a `data` string and performs various operations on it to extract
 * plain text data. These operations include converting the data to ASCII, checking
 * for valid HC1 headers, inflating compressed data using ZLIB, and decoding CBOR
 * data. Finally, the function returns the decoded plain text data.
 * 
 * @param { array } data - 64-byte buffer that contains encoded data to be decoded
 * and returned in the end result of the function.
 * 
 * @returns { array } an array of four integers, where each element is the result of
 * decoding a CBOR-encoded value using zlib inflation and cbor decode.
 */
export function decodeData(data) {
  data = data.toString('ASCII')

  if (data.startsWith('HC1')) {
    data = data.substring(3)
    if (data.startsWith(':')) {
      data = data.substring(1)
    } else {
      console.log("Warning: unsafe HC1: header - update to v0.0.4")
    }
  } else {
    console.log("Warning: no HC1: header - update to v0.0.4")
  }

  data = base45.decode(data)

  if (data[0] == 0x78) {
    data = zlib.inflate(data)
  }

  data = cbor.decode(typedArrayToBuffer(data))

  if (!Array.isArray(data)) {
    throw new Error('Expecting Array')
  }

  if (data.length !== 4) {
    throw new Error('Expecting Array of length 4')
  }

  let plaintext = data[2]
  let decoded = cbor.decode(typedArrayToBufferSliced(plaintext))

  return decoded
}