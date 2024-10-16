---
title: API
---
This document will cover the usage of the API in the covidpass project. We'll cover:

1. Overview of the API
2. Where to find the list of endpoints
3. How to use the API with Swagger and Postman

<SwmSnippet path="/src/pass.js" line="18">

---

# Overview of the API

The function `signPassWithRemote` is a key part of the API. It creates a new Zip file, adds required files, constructs a manifest, and makes a POST request to the `/sign` endpoint of the API. The response from the API is used to add a signature to the Zip file.

```javascript
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
    const manifestJson = JSON.stringify(
      zip.reduce(
```

---

</SwmSnippet>

<SwmSnippet path="/pages/api/config.js" line="1">

---

# List of Endpoints

The `/api/config` endpoint is used to return the API_BASE_URL. This allows us to access the environment variable in client-side JavaScript.

```javascript
export default function handler(req, res) {
    // Return the API_BASE_URL. This Endpoint allows us to access the env Variable in client javascript
    res.status(200).json({ apiBaseUrl: process.env.API_BASE_URL })
}
```

---

</SwmSnippet>

# Using the API with Swagger and Postman

Currently, the covidpass project does not provide a Swagger or Postman collection for its API. However, the API can be interacted with directly using HTTP requests, as demonstrated in the `signPassWithRemote` function.

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==" repo-name="covidpass"><sup>Powered by [Swimm](/)</sup></SwmMeta>
