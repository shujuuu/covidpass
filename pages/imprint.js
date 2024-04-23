import Page from '../components/Page'
import Card from '../components/Card'

/**
 * @description generates high-quality documentation for code provided, outlining
 * content including legal information and contact details.
 * 
 * @returns { HTML fragment containing the imprint information. } a formal, neutral,
 * and passive-voiced HTML card with information about the website's owner, contact
 * details, EU dispute resolution platforms, and legal disclaimers.
 * 
 * 		- `content`: An object with various components related to the imprint, including
 * headings, paragraphs, and links.
 * 		- `heading`: A heading element with text "Imprint".
 * 		- `content`: A list of components within the content block, including a p-element
 * with class "font-bold", followed by three more p-elements with classes "space-y-2",
 * "font-bold", and "space-y-2" respectively.
 * 		- `p`: A paragraph element with text containing information according to Section
 * 5 of the German Civil Code (TMG).
 * 		- `img`: An img element with a URL linking to the European Commission's platform
 * for online dispute resolution (OS).
 * 		- `a`: An anchor element with class "underline" and a URL linking to the European
 * Commission's platform for online dispute resolution (OS).
 * 		- `p`: A paragraph element with text regarding liability for contents.
 * 		- `liability-for-contents`: An h1 element with text "Liability for contents".
 * 		- `img`: An img element with a URL linking to the external website of the provider
 * or operator of the sites.
 * 		- `a`: An anchor element with class "underline" and a URL linking to the external
 * website of the provider or operator of the sites.
 * 		- `p`: A paragraph element with text regarding liability for links.
 * 		- `liability-for-links`: An h1 element with text "Liability for links".
 * 		- `div`: A division element containing the contents of the imprint, including
 * headings and links.
 * 
 * 	The `Imprint` function does not provide a summary at the end, as specified in the
 * task requirements. Instead, the output consists of various components arranged in
 * a structured format, such as headings, paragraphs, and links, all relevant to the
 * information provided in the imprint.
 */
export default function Imprint() {
  return(
    <Page content={
      <Card step="§" heading="Imprint" content={
        <div className="space-y-2">
          <p className="font-bold">Information according to § 5 TMG</p>
          <p>
            Marvin Sextro<br />
            Wilhelm-Busch-Str. 8A<br />
            30167 Hannover<br />
          </p>
          <p className="font-bold">Contact</p>
          <p>
            marvin.sextro@gmail.com
          </p>
          <p className="font-bold">EU Dispute Resolution</p>
          <p>
            The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" className="underline">https://ec.europa.eu/consumers/odr</a>. You can find our e-mail address in the imprint above.
          </p>
          <p className="font-bold">Consumer dispute resolution / universal arbitration board</p>
          <p>
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
          <p className="font-bold">Liability for contents</p>
          <p>
          As a service provider, we are responsible for our own content on these pages in accordance with § 7 paragraph 1 TMG under the general laws. According to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under the general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove the relevant content immediately.
          </p>
          <p className="font-bold">Liability for links</p>
          <p>
            Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the content of the linked sites. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.
          </p>
          <p>
            With excerpts from: https://www.e-recht24.de/impressum-generator.html
            Translated with www.DeepL.com/Translator (free version)
          </p>
        </div>
      }/>
    }/>
  )
}
