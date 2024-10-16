---
title: Vaccination Certificate in the Project
---
This document will cover the topic of 'Vaccination Certificate' in the covidpass project. We'll cover:

1. What is a 'Vaccination Certificate'
2. The main classes/functions/files that are related to 'Vaccination Certificate'

# What is a 'Vaccination Certificate'

A 'Vaccination Certificate' in the covidpass project is a digital proof of vaccination against COVID-19. It contains information such as the type of vaccine administered, the date of vaccination, the country where the vaccination was done, and a unique certificate identifier (UVCI).

<SwmSnippet path="/src/pass.js" line="115">

---

# Main classes/functions/files related to 'Vaccination Certificate'

The 'pass.js' file contains the structure of the 'Vaccination Certificate'. It includes properties such as 'Certificate Type', 'Date of Vaccination', 'Country of Vaccination', 'Vaccine', and 'Unique Certificate Identifier (UVCI)'. Each property is defined with a key, label, and value.

```javascript
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
```

---

</SwmSnippet>

<SwmSnippet path="/src/payload.js" line="77">

---

The 'payload.js' file is where the 'Vaccination Certificate' data is being set. It includes properties such as 'certificateType', 'backgroundColor', 'name', 'dose', 'dateOfVaccination', 'dateOfBirth', and 'uvci'.

```javascript
    this.certificateType = 'Vaccination'

    this.backgroundColor = backgroundColor
    this.labelColor = labelColor
    this.foregroundColor = foregroundColor
    this.img1x = img1x
    this.img2x = img2x

    this.raw = rawData
    this.dark = dark

    this.name = name
    this.dose = dose
    this.dateOfVaccination = dateOfVaccination
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==" repo-name="covidpass"><sup>Powered by [Swimm](/)</sup></SwmMeta>
