---
id: nel30
name: Nav Bar > Snippet Review > Audit
file_version: 1.0.2
app_version: 0.8.2-0
file_blobs:
  pages/imprint.js: d17f7f9c08ad968492ac49f64b46e7727b88b9b8
  pages/privacy.js: 0029521450579865fa88d4b5decfe3f9b659479f
  src/constants.js: af4c3628909bff04bcf0102bbd0adbf575d81a73
  src/payload.js: 6b1921de2ab1bbd887bec05cba6b8d21465d17e4
---

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 pages/imprint.js
```javascript
⬜ 32               <p>
⬜ 33                 Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the content of the linked sites. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.
⬜ 34               </p>
🟩 35               <p className="font-bold">Credits</p>
⬜ 36               <p>
⬜ 37                 With excerpts from: https://www.e-recht24.de/impressum-generator.html
⬜ 38                 Translated with www.DeepL.com/Translator (free version)
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 pages/privacy.js
```javascript
⬜ 98               <p>
⬜ 99                 For each vaccination certificate contained in the QR code, the following data is processed:
⬜ 100              </p>
🟩 101              <div className="px-4">
🟩 102                <ul className="list-disc">
🟩 103                  <li>Targeted disease</li>
🟩 104                  <li>Vaccine medical product</li>
🟩 105                  <li>Manufacturer/Marketing Authorization Holder</li>
🟩 106                  <li>Dose number</li>
🟩 107                  <li>Total series of doses</li>
🟩 108                  <li>Date of vaccination</li>
🟩 109                  <li>Country of vaccination</li>
🟩 110                  <li>Certificate issuer</li>
🟩 111                  <li>Unique certificate identifier (UVCI)</li>
🟩 112                </ul>
🟩 113              </div>
⬜ 114              <p>
⬜ 115                For each test certificate contained in the QR code, the following data is processed:
⬜ 116              </p>
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/constants.js
```javascript
⬜ 4          countryCodes: 'country-2-codes.json',
⬜ 5          manufacturers: 'vaccine-mah-manf.json',
⬜ 6      }
🟩 7      exports.COLORS = {
🟩 8          white: 'rgb(255, 255, 255)',
🟩 9          black: 'rgb(0, 0, 0)',
🟩 10         grey: 'rgb(33, 33, 33)',
🟩 11         green: 'rgb(27, 94, 32)',
🟩 12         indigo: 'rgb(26, 35, 126)',
🟩 13         blue: 'rgb(1, 87, 155)',
🟩 14         purple: 'rgb(74, 20, 140)',
🟩 15         teal: 'rgb(0, 77, 64)',
🟩 16     }
⬜ 17     exports.NAME = 'CovidPass'
⬜ 18     exports.PASS_IDENTIFIER = 'pass.de.marvinsextro.covidpass' // WELL KNOWN
⬜ 19     exports.TEAM_IDENTIFIER = 'X8Q7Q2RLTD' // WELL KNOWN
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/payload.js
```javascript
⬜ 4      exports.Payload = class {
⬜ 5        constructor(body, valueSets) {
⬜ 6      
🟩 7          const color = body["color"]
🟩 8          const rawData = body["raw"]
🟩 9          const decoded = body["decoded"]
⬜ 10     
⬜ 11         if (!(color in consts.COLORS)) {
⬜ 12           throw new Error('Invalid color')
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/8YrlMfpndRSfzIFJGtRl/docs/nel30).