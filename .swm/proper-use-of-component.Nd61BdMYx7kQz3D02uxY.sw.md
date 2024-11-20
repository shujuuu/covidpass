---
id: Nd61BdMYx7kQz3D02uxY
name: Proper use of component
file_version: 1.0.2
app_version: 0.7.4-0
file_blobs:
  components/Alert.js: 5183fbe95e16a9fa27c27bab76ebbcdd96cbbdcf
  components/Card.js: 059f250a03ba3ddd49076d27166735c29aa8d86c
  components/Logo.js: c8ac236a70a4f3909c2798be2cffcdd1cef6f7de
  components/Page.js: 22a75bf3f868dd7d8120b78cace69bb6ac4c4935
---

Alert
-----

Also known as banners, displays an important, succinct message, and provides actions for users to address (or dismiss the banner). It requires a user action to be dismissed.

Banners should be displayed at the top of the screen, below a top app bar. They’re persistent and nonmodal, allowing the user to either ignore them or interact with them at any time. Only one banner should be shown at a time.

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
### 📄 components/Alert.js
```javascript
⬜ 9        }
⬜ 10     
⬜ 11       return(
🟩 12         <div id="alert" style={{"display": "default"}} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-5 rounded relative" role="alert">
⬜ 13           <strong className="font-bold pr-2" id="heading"/>
⬜ 14           <span className="block sm:inline" id="message"/>
⬜ 15           <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={close}>
```

<br/>

**Anatomy:**

*   Supporting illustration (optional)
    
*   Container
    
*   Text
    
*   Buttons

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2F8YrlMfpndRSfzIFJGtRl%2Faeb202f0-e6b6-481b-bc4c-4088a0f74d6f.png?alt=media&token=5fdbce8b-9886-4d56-97dd-f8759cb38a02" style="width:'50%'"/></div>

<br/>

Card
----

Cards contain content and actions about a single subject. They are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.

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

The card container is the only required element in a card. All other elements shown here are optional. Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.

<br/>

**Anatomy**

<br/>

*   **Container**  
    Card containers hold all card elements, and their size is determined by the space those elements occupy. Card elevation is expressed by the container.
    

*   **Thumbnail** \[optional\]  
    Cards can include thumbnails to display an avatar, logo, or icon.
    
*   **Header** **text** \[optional\]  
    Header text can include things like the name of a photo album or article.
    
*   **Subhead** \[optional\]  
    Subhead text can include text elements such as an article byline or a tagged location.
    
*   **Media** \[optional\]  
    Cards can include a variety of media, including photos, and graphics, such as weather icons.
    
*   **Supporting** **text** \[optional\]  
    Supporting text include text like an article summary or a restaurant description.
    
*   **Buttons** \[optional\]  
    Cards can include buttons for actions.
    
*   **Icons** \[optional\]  
    Cards can include icons for actions.

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2F8YrlMfpndRSfzIFJGtRl%2F1e82251b-648f-44ee-a833-cadd2598e222.png?alt=media&token=e538b30c-5db3-4958-9686-1c4a8a01b1b3" style="width:'25%'"/></div>

<br/>

Logo
----

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 components/Logo.js
```javascript
⬜ 7              <Link href="/">
⬜ 8                  <a className="flex flex-row items-center p-3 justify-center space-x-1">
⬜ 9                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
🟩 10                          height="32px" width="20px"
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
🟩 21                         VaccinePass
⬜ 22     
⬜ 23                         <ul>
⬜ 24                             <li>pfizer</li>
```

<br/>

Page
----

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

This file was generated by Swimm. [Click here to view it in the app](https://swimm-web-app.web.app/repos/Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==/docs/Nd61BdMYx7kQz3D02uxY).