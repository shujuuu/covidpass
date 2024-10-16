---
title: Alert in Components
---
This document will cover the topic of 'Alert' in the covidpass repository. We'll cover:

1. What 'Alert' in components are
2. The main classes/functions/files that are related to 'Alert' in components.

# What 'Alert' in components are

The 'Alert' in components is a function that is used to display alert messages to the user. It is implemented as a React component that can be included in any part of the application where an alert message is needed. The alert message is hidden by default and can be displayed by changing its style attribute.

<SwmSnippet path="/components/Alert.js" line="4">

---

# The main classes/functions/files that are related to 'Alert' in components

The `Alert` function is the main function related to 'Alert' in components. It defines the structure and behavior of the alert message. The alert message is contained within a div element with id 'alert'. The 'close' function is used to hide the alert message by setting its display style to 'none'.

```javascript
export function Alert() {

  const close = function() {
    const alert = document.getElementById('alert')
    alert.setAttribute('style', 'display: none;')
  }

  return(
    <div id="alert" style={{"display": "none"}} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-5 rounded relative" role="alert">
      <strong className="font-bold pr-2" id="heading"/>
      <span className="block sm:inline" id="message"/>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={close}>
        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </span>
    </div>
  )
}
```

---

</SwmSnippet>

<SwmSnippet path="/components/Alert.js" line="6">

---

The `close` function is a helper function defined within the `Alert` function. It is used to hide the alert message by getting the alert element by its id and setting its display style to 'none'.

```javascript
  const close = function() {
    const alert = document.getElementById('alert')
    alert.setAttribute('style', 'display: none;')
  }
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==" repo-name="covidpass"><sup>Powered by [Swimm](/)</sup></SwmMeta>
