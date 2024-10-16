---
title: API
---
This document will cover the following aspects of the API in the 'covidpass' repository:

1. Overview of the API and its offerings
2. Details on where to find the list of endpoints
3. Usage of API documentation tools like Swagger and Postman

# API Overview

The API in the 'covidpass' repository is primarily used for signing and generating COVID-19 Vaccination Certificates. It provides endpoints for fetching configuration data and signing the pass data.

<SwmSnippet path="/pages/api/config.js" line="1">

---

# API Overview

This is the handler function for the '/api/config' endpoint. It returns the API_BASE_URL, which is used to access the environment variable in client-side JavaScript.

```javascript
export default function handler(req, res) {
    // Return the API_BASE_URL. This Endpoint allows us to access the env Variable in client javascript
    res.status(200).json({ apiBaseUrl: process.env.API_BASE_URL })
}
```

---

</SwmSnippet>

<SwmSnippet path="/src/pass.js" line="18">

---

The `signPassWithRemote` function is a key part of the API. It creates a new Zip file, adds required files, constructs a manifest, and makes a POST request to the '/sign' endpoint of the API_BASE_URL to get the manifest signature. The function returns a buffer of the Zip file.

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

# Finding the List of Endpoints

The list of endpoints can be found in the 'pages/api' directory. Each file in this directory corresponds to an endpoint.

# API Documentation Tools

Currently, the 'covidpass' repository does not include specific API documentation tools like Swagger or Postman. However, the API's functionality and usage can be understood by examining the code in the 'pages/api' directory and the functions that interact with the API, such as `signPassWithRemote`.

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==" repo-name="covidpass"><sup>Powered by [Swimm](/)</sup></SwmMeta>
