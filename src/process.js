import {PNG} from 'pngjs'
import * as PdfJS from 'pdfjs-dist'

PdfJS.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PdfJS.version}/pdf.worker.js`

// Processes a pdf file and returns it as ImageData
/**
 * @description reads a given PDF file and renders its contents on a HTML Canvas
 * element, scaled to a specific factor. It then returns an ImageData object containing
 * the rendered image.
 * 
 * @param { array } file - PDF file to be processed and is passed through the
 * `PdfJS.getDocument()` method to retrieve the PDF document.
 * 
 * @returns { `ImageData`. } an ImageData object containing the rendered PDF image.
 * 
 * 		- ctx.getImageData(0, 0, canvas.width, canvas.height): This is an ImageData
 * object that represents the rendered PDF image. It contains a two-dimensional array
 * of pixels with each pixel represented as a 32-bit integer value. The pixels are
 * organized in rows, starting from the top of the canvas, and then shifted to the
 * left by half the pixel width to align them correctly for rendering.
 * 
 * 	The properties of the ImageData object include:
 * 
 * 		- width: The width of the rendered image in pixels.
 * 		- height: The height of the rendered image in pixels.
 * 		- data: An array of pixels represented as 32-bit integer values. Each pixel is
 * stored in a separate index in the array, starting from 0 and increasing by 1 for
 * each pixel.
 */
export async function processPdf(file) {
    // Array to store ImageData information
    const typedArray = new Uint8Array(file)

    // PDF scale, increase to read smaller QR Codes
    const pdfScale = 2;

    // Get the canvas and context to render PDF
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    let loadingTask = PdfJS.getDocument(typedArray)

    await loadingTask.promise.then(async function (pdfDocument) {
        // Load last PDF page
        const pageNumber = pdfDocument.numPages;

        const pdfPage = await pdfDocument.getPage(pageNumber)
        const viewport = pdfPage.getViewport({scale: pdfScale})

        // Set correct canvas width / height
        canvas.width = viewport.width
        canvas.height = viewport.height

        // render PDF
        const renderTask = pdfPage.render({
            canvasContext: ctx,
            viewport,
        })

        return await renderTask.promising
    })

    // Return PDF Image Data
    return ctx.getImageData(0, 0, canvas.width, canvas.height)
}

// Processes a PNG File and returns it as ImageData
/**
 * @description parses an PNG file using the `png` library, resolving or rejecting
 * depending on any parsing errors.
 * 
 * @param { object } file - PNG file to be processed.
 * 
 * @returns { image buffer. } a PNG image.
 * 
 * 	The output is a promise that resolves with an object containing the decoded PNG
 * image data. The object has the following properties:
 * 
 * 		- `data`: The decoded PNG image data in a binary format.
 * 		- `filterType`: The filter type used for decoding, which can be either 0 (no
 * filter), 1 (grayscale), or 4 (edge detection).
 */
export async function processPng(file) {
    return new Promise(async (resolve, reject) => {
        let png = new PNG({filterType: 4})

        png.parse(file, (error, data) => {
            if (error) {
                reject()
            }

            resolve(data)
        })
    })
}
