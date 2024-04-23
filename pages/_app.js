import 'tailwindcss/tailwind.css'

import App from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

export default class MyApp extends App {
  /**
   * @description takes the component props and passes them to the `Component` component,
   * along with any additional page properties.
   * 
   * @returns { `HTML Container`. } a JSX component that includes both the `DefaultSeo`
   * and the given `Component`.
   * 
   * 		- `<DefaultSeo ...SEO />`: This is a component that renders an HTML element with
   * SEO-friendly content. Its props are `...SEO`, which represents the SEO object
   * passed as a prop to the `render` function.
   * 		- `<Component {...pageProps} />`: This is another component that renders the
   * content of the page. Its props are `...pageProps`, which represents the page
   * properties passed as a prop to the `render` function.
   */
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}