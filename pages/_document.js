import Document, {Html, Head, Main, NextScript} from 'next/document'

class CustomDocument extends Document {
    /**
     * @description generates HTML code for a web page, consisting of a `<Head>`, `<body>`,
     * and `<NextScript>` elements.
     * 
     * @returns { HTML element. } an HTML document containing a head section, body section,
     * and script tags.
     * 
     * 		- `<Html>`: This represents the root element of an HTML document.
     * 		- `<Head>`: This element contains metadata about the document, such as the
     * language and characterset.
     * 		- `<body>` : This element contains the content and layout of the document's body.
     * It is given a class of "bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white",
     * which sets the background color, text color, and other styling for the document.
     * 		- `<Main>`: This element contains the main content of the document.
     * 		- `<NextScript>`: This element represents the next script tag in the HTML document.
     * 
     * 	In total, the output returned by the `render` function is an HTML document with
     * a basic layout and styling.
     */
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default CustomDocument