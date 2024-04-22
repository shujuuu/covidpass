import Head from 'next/head'
import Logo from './Logo'
import Link from 'next/link'

export default Page

/**
 * @description renders a page with a title, favicon, logo, main content, and footer
 * navigation links.
 * 
 * @param { `JSXElement`. } content - content of the main section of the page, which
 * is rendered as a flexible container with a justify-center alignment and a spacing
 * of 5 pixels within.
 * 
 * 		- `main`: A flex container with a flexible width and a height of at least half
 * of the viewport height.
 * 		- `div`: A direct child of `main`, which contains the rest of the page content.
 * 		- `<Logo>`: A sibling element of `main`, representing the page logo.
 * 		- `<Content>` (optional): A child element of `div`, representing the main content
 * of the page. If present, it is wrapped in a container with a flexible width and a
 * height of at least half of the viewport height.
 * 		- `<footer>`: A sibling element of `div`, containing navigation links to various
 * pages on the website.
 * 		- `<nav>`: A direct child of `footer`, which contains the navigation links.
 * 		- `<a>` (optional): Each link in the navigation is represented by an anchor
 * element with a className attribute set to "hover:underline". When hovered over,
 * the element will underline its text content.
 * 		- `<Link>` (optional): Each link in the navigation can also be accompanied by a
 * Link component, which provides additional functionality such as following the URL
 * of the linked page when clicked.
 * 		- `privacy-policy`: A URL linked to the website's Privacy Policy page.
 * 		- `imprint`: A URL linked to the website's Imprint page.
 * 
 * @returns { HTML div element. } a responsive HTML layout containing a logo, content
 * area, and footer with links to relevant resources.
 * 
 * 		- `<div className="md:w-2/3 xl:w-2/5 md:mx-auto flex flex-col min-h-screen
 * justify-center px-5 py-12">`: This element represents a container div with class
 * names that specify its layout and styling.
 * 		- `<Head>`: This element represents the HTML header, which contains metadata
 * such as the title of the page and favicon link.
 * 		- `<main>`: This element represents the main content of the page, where all other
 * elements are wrapped around. It has a flex layout and spacing class names for
 * better visual representation.
 * 		- `<Logo>`：This element represents the logo of the page, which is displayed
 * inside the main content area.
 * 		- `{content}`: This element represents the dynamic content provided by the user
 * as an argument to the `Page` function. It is displayed inside the main content
 * area using a flex container.
 * 		- `<footer>`: This element represents the footer section of the page, which
 * contains links to various pages or resources related to the site. It has a flex
 * layout and spacing class names for better visual representation.
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