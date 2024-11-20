---
id: MihzdXh0u8PqDNuLXW09
name: Covidpass is my go to repo from now on
file_version: 1.0.2
app_version: 0.10.0-0
file_blobs:
  components/Logo.js: 76dc5a35df41daaf7182c180022c8d4b609a9a98
  components/Page.js: 22a75bf3f868dd7d8120b78cace69bb6ac4c4935
  components/Alert.js: a7bfad37bfe0d6913c1317b3ea344a6c67fe3404
  components/Card.js: 059f250a03ba3ddd49076d27166735c29aa8d86c
  pages/imprint.js: d17f7f9c08ad968492ac49f64b46e7727b88b9b8
  pages/privacy.js: 0029521450579865fa88d4b5decfe3f9b659479f
  package-lock.json: 9739ded7b028e63fda340507a6da0ae37fdc7821
---

All other repository does not work.  
  
If edit files from VS Code, does not reflect changes.  
If edit and commit files, then changes should be seen?

<br/>

let's try changing the`height`[<sup id="Z32QA2">↓</sup>](#f-Z32QA2) from component/Logo.js change to 32px.

also change the Headline on `📄 components/Logo.js` to `CovidPass`[<sup id="1750sv">↓</sup>](#f-1750sv) to VaccinePass.

this also applies to the title in file `📄 components/Page.js` `title`[<sup id="Z1KNiQz">↓</sup>](#f-Z1KNiQz) \`

then show `display`[<sup id="Zj3qY7">↓</sup>](#f-Zj3qY7) from display `none`[<sup id="L7wVm">↓</sup>](#f-L7wVm) \` to "show".

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 components/Logo.js
```javascript
⬜ 7              <Link href="/">
⬜ 8                  <a className="flex flex-row items-center p-3 justify-center space-x-1">
⬜ 9                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
🟩 10                          height="48px"
⬜ 11                          viewBox="0 0 24 24" width="48px" fill="#000000">
⬜ 12                         <g>
⬜ 13                             <path d="M0,0h24v24H0V0z" fill="none"/>
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 components/Logo.js
```javascript
⬜ 18                         </g>
⬜ 19                     </svg>
⬜ 20                     <h1 className="text-3xl font-bold">
🟩 21                         CovidPass
⬜ 22                     </h1>
⬜ 23                 </a>
⬜ 24             </Link>
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 components/Page.js
```javascript
⬜ 8        return (
⬜ 9          <div className="md:w-2/3 xl:w-2/5 md:mx-auto flex flex-col min-h-screen justify-center px-5 py-12">
⬜ 10           <Head>
🟩 11             <title>CovidPass</title>
⬜ 12             <link rel="icon" href="/favicon.ico" />
⬜ 13           </Head>
⬜ 14           <div>
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 components/Alert.js
```javascript
⬜ 9        }
⬜ 10     
⬜ 11       return(
🟩 12         <div id="alert" style={{"display": "none"}} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-5 rounded relative" role="alert">
⬜ 13           <strong className="font-bold pr-2" id="heading"/>
⬜ 14           <span className="block sm:inline" id="message"/>
⬜ 15           <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={close}>
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 components/Card.js
```javascript
⬜ 11                                 {step}
⬜ 12                             </p>
⬜ 13                         </div>
🟩 14                         <div className="ml-3 font-bold text-xl">
⬜ 15                             {heading}
⬜ 16                         </div>
⬜ 17                     </div>
```

<br/>

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
⬜ 9                <p>
⬜ 10                 Our privacy policy is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR).
⬜ 11               </p>
🟩 12               <p className="font-bold">General information</p>
⬜ 13               <div className="px-4">
⬜ 14                 <ul className="list-disc">
⬜ 15                   <li>
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 pages/privacy.js
```javascript
⬜ 55                 First, the following steps happen locally in your browser:
⬜ 56               </p>
⬜ 57               <div className="px-4">
🟩 58                 <ul className="list-disc">
🟩 59                   <li>Recognizing and extracting the QR code data from your selected certificate</li>
🟩 60                   <li>Decoding your personal and health-related data from the QR code payload</li>
🟩 61                   <li>Assembling an incomplete pass file out of your data</li>
🟩 62                   <li>Generating a file containing hashes of the data stored in the pass file</li>
🟩 63                   <li>Sending only the file containing the hashes to our server</li>
🟩 64                 </ul>
⬜ 65               </div>
⬜ 66               <p>
⬜ 67                 Second, the following steps happen on our server:
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 pages/privacy.js
```javascript
⬜ 90                 Processed personal data contained in the QR code:
⬜ 91               </p>
⬜ 92               <div className="px-4">
🟩 93                 <ul className="list-disc">
🟩 94                   <li>Your first and last name</li>
🟩 95                   <li>Your date of birth</li>
🟩 96                 </ul>
⬜ 97               </div>
⬜ 98               <p>
⬜ 99                 For each vaccination certificate contained in the QR code, the following data is processed:
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 pages/privacy.js
```javascript
⬜ 179              </div>
⬜ 180              <p className="font-bold">Third parties linked</p>
⬜ 181              <div className="px-4">
🟩 182                <ul className="list-disc">
🟩 183                  <li>
🟩 184                    GitHub: <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" className="underline">Privacy Policy</a>
🟩 185                  </li>
🟩 186                  <li>
🟩 187                    PayPal: <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full?locale.x=en_EN" className="underline">Privacy Policy</a>
🟩 188                  </li>
🟩 189                  <li>
🟩 190                    Gmail/Google: <a href="https://policies.google.com/privacy?hl=en-US" className="underline">Privacy Policy</a>
🟩 191                  </li>
🟩 192                  <li>
🟩 193                    Apple may sync your passes via iCloud: <a href="https://www.apple.com/legal/privacy/en-ww/" className="underline">Privacy Policy</a>
🟩 194                  </li>
⬜ 195                </ul>
⬜ 196              </div>
⬜ 197            </div>
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 components/Alert.js
```javascript
⬜ 4      export function Alert() {
⬜ 5      
⬜ 6        const close = function() {
🟩 7          const alert = document.getElementById('alert')
🟩 8          alert.setAttribute('style', 'display: none;')
⬜ 9        }
⬜ 10     
⬜ 11       return(
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 pages/imprint.js
```javascript
⬜ 7            <Card step="§" heading="Imprint" content={
⬜ 8              <div className="space-y-2">
⬜ 9                <p className="font-bold">Information according to § 5 TMG</p>
🟩 10               <p>
🟩 11                 Marvin Sextro<br />
🟩 12                 Wilhelm-Busch-Str. 8A<br />
🟩 13                 30167 Hannover<br />
🟩 14               </p>
⬜ 15               <p className="font-bold">Contact</p>
⬜ 16               <p>
⬜ 17                 marvin.sextro@gmail.com
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 pages/imprint.js
```javascript
⬜ 28               <p>
⬜ 29               As a service provider, we are responsible for our own content on these pages in accordance with § 7 paragraph 1 TMG under the general laws. According to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under the general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove the relevant content immediately.
⬜ 30               </p>
🟩 31               <p className="font-bold">Liability for links</p>
⬜ 32               <p>
⬜ 33                 Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the content of the linked sites. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.
⬜ 34               </p>
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 package-lock.json
```json
⬜ 36           "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.11.tgz",
⬜ 37           "integrity": "sha512-Zt1yodBx1UcyiePMSkWnU4hPqhwq7hGi2nFL1LeA3EUl+q2LQx16MISgJ0+z7dnmgvP9QtIleuETGOiOH1RcIw==",
⬜ 38           "dependencies": {
🟩 39             "@babel/highlight": "^7.10.4"
⬜ 40           }
⬜ 41         },
⬜ 42         "node_modules/@babel/helper-validator-identifier": {
```

<br/>

<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->
### Swimm Note

<span id="f-1750sv">CovidPass</span>[^](#1750sv) - "components/Logo.js" L21
```javascript
                    CovidPass
```

<span id="f-Zj3qY7">display</span>[^](#Zj3qY7) - "components/Alert.js" L12
```javascript
    <div id="alert" style={{"display": "none"}} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-5 rounded relative" role="alert">
```

<span id="f-Z32QA2">height</span>[^](#Z32QA2) - "components/Logo.js" L10
```javascript
                     height="48px"
```

<span id="f-L7wVm">none</span>[^](#L7wVm) - "components/Logo.js" L13
```javascript
                        <path d="M0,0h24v24H0V0z" fill="none"/>
```

<span id="f-Z1KNiQz">title</span>[^](#Z1KNiQz) - "components/Page.js" L11
```javascript
        <title>CovidPass</title>
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://swimm-web-app.web.app/repos/Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==/docs/MihzdXh0u8PqDNuLXW09).