import Head from 'next/head'
import Logo from './Logo'
import Link from 'next/link'

export default Page

/**
 * @description creates a web page with a header, main content area, and footer. The
 * main content area displays the given `content`.
 * 
 * @param { any } content - HTML content that will be rendered within the main div
 * container of the page, following the structural elements defined by the function's
 * syntax.
 * 
 * @returns { HTML document. } a React component that displays content inside a main
 * div.
 * 
 * 		- `div`: A div element with a class of "md:w-2/3 xl:w-2/5 md:mx-auto flex flex-col
 * min-h-screen justify-center px-5 py-12". This means that the page will have a width
 * of 2/3 or 2/5 of the screen on medium and extra large screens, respectively, and
 * will be centered horizontally with a margin top and bottom.
 * 		- `Head`: A head element with a title tag and a link rel="icon" to an icon file.
 * 		- `main`: A main element with a class of "flex flex-col space-y-5". This means
 * that the page's content will be wrapped in a flexible container with a margin top
 * and bottom, and there will be a space between each element.
 * 		- `Logo`: An img element representing the logo of the application.
 * 		- `Content`: Any content provided as a prop to the `Page` function, rendered as
 * a child element of the main element.
 * 		- `footer`: A footer element with a nav element inside it. The nav element has
 * links to various pages and resources, including a Donate button, GitHub repository,
 * Privacy Policy, and Imprint.
 */
function Page({ content }) {
  return (
    <div className="md:w-2/3 xl:w-2/5 md:mx-auto flex flex-col min-h-screen justify-center px-5 py-12">
      <Head>
        <title>CovidPass</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="flex flex-col space-y-5">
          <Logo />

          {content}

          <footer>
            <nav className="nav flex pt-4 flex-row space-x-4 justify-center text-md font-bold">
              <a href="https://www.paypal.com/paypalme/msextro" className="hover:underline" >Donate</a>
              <a href="https://github.com/marvinsxtr/covidpass" className="hover:underline" >GitHub</a>
              <Link href="/privacy"><a className="hover:underline" >Privacy Policy</a></Link>
              <Link href="/imprint"><a className="hover:underline" >Imprint</a></Link>
            </nav>
          </footer>
        </main>
      </div>
    </div>
  )
}