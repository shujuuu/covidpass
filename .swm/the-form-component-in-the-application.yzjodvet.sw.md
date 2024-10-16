---
title: The Form Component in the Application
---
This document will cover the topic of 'Form' in the components of the covidpass repository. We'll cover:

1. What 'Form' in components are
2. The main classes/functions/files that are related to 'Form' in components.

# What 'Form' in components are

The 'Form' in the components directory of the covidpass repository is a JavaScript function that handles the form submission process in the application. It is responsible for reading and processing the user's COVID-19 Vaccination Certificate data, either from a QR code or a file, and adding it to their wallet.

<SwmSnippet path="/components/Form.js" line="13">

---

# Main classes/functions/files related to 'Form'

This is the main 'Form' function. It includes several helper functions such as 'readFileAsync', 'error', 'processFile', and 'addToWallet'. These functions handle various aspects of the form submission process, including reading files, handling errors, processing the certificate data, and adding the certificate to the user's wallet.

```javascript
function Form() {

    function readFileAsync(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsArrayBuffer(file);
        })
    }

    const error = function (heading, message) {
        const alert = document.getElementById('alert')
        alert.setAttribute('style', null)

        document.getElementById('heading').innerHTML = heading
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==" repo-name="covidpass"><sup>Powered by [Swimm](/)</sup></SwmMeta>
