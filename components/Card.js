export default Card

/**
 * @description returns a div element with heading, content and step details, using
 * flexbox layout to center components horizontally.
 * 
 * @param { string } heading - headline or title of the card, which is displayed as
 * a large font heading above the content area.
 * 
 * @param { string } content - content of the card, which is displayed inside the
 * `div` element with a class of `text-lg`.
 * 
 * @param { number } step - 10th step in the Card component and adds a green round
 * element with the step number to the card.
 * 
 * @returns { HTML element (specifically, a `div` element) with CSS styles applied.
 * } a responsive, interactive card with text content and an optional step icon.
 * 
 * 		- `<div>` element with className `"rounded-md p-6 bg-white dark:bg-gray-800"`:
 * represents the container for the card's content.
 * 		- `<div>` element with className `"flex flex-row items-center"`: represents the
 * card's contents, which are displayed in a row and centered horizontally.
 * 		- `<div>` element with className `"rounded-full p-4 bg-green-600 h-5 w-5"`:
 * represents a round container for the step number.
 * 		- `<p>` element with className `"text-white text-lg font-bold"`: represents the
 * step number, displayed in a large font size and white color.
 * 		- `<div>` element with className `"ml-3 font-bold text-xl"`: represents the
 * card's heading, displayed above the content and centered vertically.
 * 		- `<div>` element with className `"text-lg"`: represents the card's content,
 * displayed in a large font size.
 */
function Card({heading, content, step}) {
    return (
        <div className="rounded-md p-6 bg-white dark:bg-gray-800 space-y-4">
            {
                step &&
                <div className="flex flex-row items-center">
                    <div className="rounded-full p-4 bg-green-600 h-5 w-5 flex items-center justify-center">
                        <p className="text-white text-lg font-bold">
                            {step}
                        </p>
                    </div>
                    <div className="ml-3 font-bold text-xl">
                        {heading}
                    </div>
                </div>
            }
            <div className="text-lg">
                {content}
            </div>
        </div>
    )
}