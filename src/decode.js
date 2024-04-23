// Taken from https://github.com/ehn-dcc-development/ehn-sign-verify-javascript-trivial/blob/main/cose_verify.js
// and https://github.com/ehn-dcc-development/dgc-check-mobile-app/blob/2c2ebf4e9b7650ceef44f7e1fb05a57572830c5b/src/app/cose-js/sign.js

const base45 = require('base45-js')
const zlib = require('pako')
const cbor = require('cbor-js')

/**
 * @description slices a typed array buffer at a specified offset and length, returning
 * a new buffer slice.
 * 
 * @param { array } array - 3D or 2D array that contains the elements to be transformed
 * into a buffer.
 * 
 * @returns { array } a slice of the input typed array's buffer.
 */
export function typedArrayToBufferSliced(array) {
  return array.buffer.slice(array.byteOffset, array.byteLength + array.byteOffset)
}

/**
 * @description creates a new `ArrayBuffer` and fills it with values from an array.
 * It then returns the buffer representing the original array.
 * 
 * @param { array } array - 1D array of values to convert into a buffer.
 * 
 * @returns { array } a new `Buffer` object that references the same memory as the
 * input `TypedArray`.
 */
export function typedArrayToBuffer(array) {
  var buffer = new ArrayBuffer(array.length)

  array.map(function(value, i) {
    buffer[i] = value
  })
  return array.buffer
}

/**
 * @description takes an ArrayBuffer or a typed array as input and allocates a new
 * Buffer with the same content, returning it as a Buffer object.
 * 
 * @param { array } ab - 8-bit array or buffer that contains the binary data to be
 * converted into a buffer.
 * 
 * @returns { array } a buffer object of length `ab.byteLength`, containing the exact
 * bytes of the original array buffer.
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
 * @description converts a encoded data into plain text by performing base45 decode,
 * zlib inflate, and CBOR decode.
 * 
 * @param { string } data - 64-byte ciphertext that needs to be decoded.
 * 
 * @returns { array } a decoded array of four elements, with the first element being
 * the plaintext and the remaining elements being decoded data.
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