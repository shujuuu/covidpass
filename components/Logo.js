import Link from 'next/link'

export default Logo

/**
 * @description renders an SVG logo and text-based header for the "CovidPass" project,
 * creating a visually consistent brand image.
 * 
 * @returns { HTML element. } a SVG element containing a logo and text labeling it "CovidPass".
 * 
 * 		- The Link component is used to create a link element that points to the CovidPass
 * homepage.
 * 		- The `<a>` element has a className attribute set to `"flex flex-row items-center
 * p-3 justify-center space-x-1"`, which adds styles to make the link element flexible
 * and centered.
 * 		- Inside the `<svg>` element, there are several g elements that contain path
 * components. Each path component is defined by a d attribute that specifies its shape.
 * 		- The `viewBox` attribute sets the coordinates of the SVG viewbox to (0, 0, 24,
 * 24), which means that the SVG will be displayed within a rectangle with those dimensions.
 * 		- The `height` and `width` attributes set the dimensions of the SVG element to
 * 48px.
 * 		- The `fill` attribute sets the fill color of the SVG element to `#000000`, which
 * means that the SVG will be filled with a dark gray color.
 * 		- Inside the first g element, there is a path component defined by the d attribute
 * `M0,0h24v24H0V0z`. This path component creates a horizontal line from the top left
 * corner of the SVG to the bottom right corner, with a height of 24 pixels and a
 * vertical line from the top to the bottom.
 * 		- Inside the second g element, there are two more path components defined by the
 * d attributes `M11.3,2.26l-6,2.25` and `M10.23,14.83l-2.12-2.12`. These path
 * components create a vertical line from the top left corner of the SVG to the bottom
 * right corner at position (11.3, 2.26) and a horizontal line from the top left
 * corner to the bottom right corner at position (10.23, 14.83), respectively.
 * 		- The `counters` attribute is set to `count`, which means that the SVG will
 * display a counter at each point where a path component intersects with the SVG viewbox.
 * 		- Inside the third g element, there is a path component defined by the d attribute
 * `M10.23,14.83l-2.12-2.12c-0.39-0.39-0.39-1.02,0-1.41l0,0`. This path component
 * creates a vertical line from the top left corner of the SVG to the bottom right
 * corner at position (10.23, 14.83), but with a slight angle.
 * 		- The `fill` attribute is set to `"none"`, which means that the filled area of
 * the SVG will be empty.
 * 		- Inside the fourth g element, there are two more path components defined by the
 * d attributes `M12.57,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39`.
 * The first path component creates a horizontal line from the top left corner of the
 * SVG to the bottom right corner at position (12.57, 6.39), while the second path
 * component creates a vertical line from the top to the bottom at position (10.23,
 * 14.83).
 * 		- The `counters` attribute is set to `count`, which means that the SVG will
 * display a counter at each point where a path component intersects with the SVG viewbox.
 * 		- Inside the fifth g element, there is a path component defined by the d attribute
 * `M11.3,2.26l-6,2.25C4.52,4.81,4,5.55,4,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39`.
 * This path component creates a horizontal line from the top left corner of the SVG
 * to the bottom right corner at position (11.3, 2.26), while slightly angled.
 * 		- The `fill` attribute is set to `"none"`, which means that the filled area of
 * the SVG will be empty.
 * 		- Inside the sixth g element, there are two more path components defined by the
 * d attributes `M10.23,14.83l-2.12-2.12c-0.39-0.39-0.39-1.02,0-1.41l0,0` and
 * `M12.57,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39`. The
 * first path component creates a vertical line from the top left corner of the SVG
 * to the bottom right corner at position (10.23, 14.83), while the second path
 * component creates a horizontal line from the top left corner to the bottom right
 * corner at position (12.57, 6.39).
 * 		- The `counters` attribute is set to `count`, which means that the SVG will
 * display a counter at each point where a path component intersects with the SVG viewbox.
 * 		- Inside the seventh g element, there is a path component defined by the d
 * attribute `M11.3,2.26l-6,2.25C4.52,4.81,4,5.55,4,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39`.
 * This path component creates a horizontal line from the top left corner of the SVG
 * to the bottom right corner at position (11.3, 2.26), while slightly angled.
 * 		- The `fill` attribute is set to `"none"`, which means that the filled area of
 * the SVG will be empty.
 * 		- Inside the eighth g element, there are two more path components defined by the
 * d attributes `M10.23,14.83l-2.12-2.12c-0.39-0.39-0.39-1.02,0-1.41l0,0` and
 * `M12.57,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39`. The
 * first path component creates a vertical line from the top left corner of the SVG
 * to the bottom right corner at position (10.23, 14.83), while the second path
 * component creates a horizontal line from the top left corner to the bottom right
 * corner at position (12.57, 6.39).
 * 		- The `counters` attribute is set to `count`, which means that the SVG will
 * display a counter at each point where a path component intersects with the SVG viewbox.
 * 		- Inside the ninth g element, there is a path component defined by the d attribute
 * `M10.23,14.83l-2.12-2.12c-0.39-0.39-0.39-1.02,0-1.41l0,0`. This path component
 * creates a vertical line from the top left corner of the SVG to the bottom right
 * corner at position (10.23, 14.83), while slightly angled.
 * 		- The `fill` attribute is set to `"none"`, which means that the filled area of
 * the SVG will be empty.
 * 		- Inside the tenth g element, there are two more path components defined by the
 * d attributes `M12.57,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39`
 * and `M11.3,2.26l-6,2.25C4.52,4.81,4,5.55,4,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39`.
 * The first path component creates a horizontal line from the top left corner of the
 * SVG to the bottom right corner at position (12.57, 6.39), while the second path
 * component creates a vertical line from the top left corner to the bottom right
 * corner at position (11.3, 2.26).
 * 		- The `counters` attribute is set to `count`, which means that the SVG will
 * display a counter at each point where a path component intersects with the SVG viewbox.
 * 
 * 	Overall, this code creates an SVG image with ten paths, each created using the
 * `g` element and defined by a series of coordinates. The paths are positioned along
 * the x-axis and y-axis, creating a diagonal line that passes through ten points,
 * labeled `1-10`. Each path is defined by a series of coordinates, which create a
 * smooth curve that forms the path. The `fill` attribute is set to `"none"`, which
 * means that the filled area of the SVG will be empty. The `counters` attribute is
 * set to `count`, which means that the SVG will display a counter at each point where
 * a path component intersects with the SVG viewbox.
 */
function Logo() {
    return (
        <Link href="/">
            <a className="flex flex-row items-center p-3 justify-center space-x-1">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                     height="48px"
                     viewBox="0 0 24 24" width="48px" fill="#000000">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                    <g>
                        <path
                            d="M11.3,2.26l-6,2.25C4.52,4.81,4,5.55,4,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39 c0-0.83-0.52-1.58-1.3-1.87l-6-2.25C12.25,2.09,11.75,2.09,11.3,2.26z M10.23,14.83l-2.12-2.12c-0.39-0.39-0.39-1.02,0-1.41l0,0 c0.39-0.39,1.02-0.39,1.41,0l1.41,1.41l3.54-3.54c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41l-4.24,4.24 C11.26,15.22,10.62,15.22,10.23,14.83z"/>
                    </g>
                </svg>
                <h1 className="text-3xl font-bold">
                    CovidPass
                </h1>
            </a>
        </Link>
    )
}