---
title: Certificate Decoding Overview
---
This document will cover the process of Certificate Decoding in the covidpass project. We'll cover:

1. The implementation of Certificate Decoding
2. The usage of Certificate Decoding in the codebase.

<SwmSnippet path="/src/decode.js" line="31">

---

# Certificate Decoding Implementation

The `decodeData` function is the main implementation of Certificate Decoding. It takes a data input, processes it through several steps including base45 decoding, zlib inflation, and cbor decoding, and finally returns the decoded data.

```javascript
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
```

---

</SwmSnippet>

<SwmSnippet path="/src/decode.js" line="31">

---

# Usage of Certificate Decoding

The `decodeData` function is used in the codebase to decode the EU COVID-19 Vaccination Certificates. The decoded data is then used for further processing in the application.

```javascript
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
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==" repo-name="covidpass"><sup>Powered by [Swimm](/)</sup></SwmMeta>
