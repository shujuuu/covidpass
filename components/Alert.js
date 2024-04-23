
export default Alert

/**
 * @description creates a custom alert component with a close button, which when
 * clicked, sets the `display` property of the element to `none`.
 * 
 * @returns { HTMLDivElement. } a visually striking alert box with a close button.
 * 
 * 	The `<div>` element with an `id` of `alert` has several attributes:
 * 
 * 		- `style`: This attribute sets the display property to none, which hides the
 * element from view.
 * 		- `id`: This attribute assigns a unique identifier to the element, which can be
 * used to reference it in other parts of the code.
 * 		- `className`: This attribute sets the class name of the element to `bg-red-100`,
 * `border`, `border-red-400`, `text-red-700`, and `px-4 py-3`. These classes are
 * used to apply styles to the element.
 * 		- `role`: This attribute sets the role of the element to `alert`.
 * 
 * 	The `<strong>` element within the `div` has an `id` of `#heading`.
 * 
 * 	The `<span>` elements within the `div` have an `id` of `#message`, and are
 * positioned absolutely using the `top-0`, `bottom-0`, and `right-0` properties.
 * They also have a `py-3` property, which sets the vertical padding of the element
 * to 3 units.
 * 
 * 	The `<svg>` element within the `span` has an `id` of `#close`. It has several attributes:
 * 
 * 		- `className`: This attribute sets the class name of the element to `fill-current`,
 * which sets the fill color of the element to current color.
 * 		- `role`: This attribute sets the role of the element to `button`.
 * 		- `viewBox`: This attribute sets the view box of the element to (0, 0, 20, 20),
 * which defines the boundaries of the element.
 * 		- `xmlns`: This attribute specifies the XML namespace for the element, which is
 * `http://www.w3.org/2000/svg`.
 * 
 * 	The `<path>` element within the `svg` has an `id` of `#close-path`, and several
 * attributes:
 * 
 * 		- `d`: This attribute sets the path data of the element to `M14.348 14.849a1.2
 * 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2
 * 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152
 * 2.758 3.15a1.2 1.2 0 0 1 0 1.698z`. This path data creates a button with an arrow
 * pointing to the right.
 * 		- `title`: This attribute sets the title of the element to `Close`, which is
 * displayed when the user hovers over the button.
 */
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