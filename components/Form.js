import {saveAs} from 'file-saver'
import {BrowserQRCodeReader} from '@zxing/browser'
import React, {useEffect, useRef, useState} from "react"
import {decodeData} from "../src/decode"
import {processPdf, processPng} from "../src/process"
import {createPass} from "../src/pass"
import Card from "../components/Card"
import Alert from "../components/Alert"
import jsQR from "jsqr";

export default Form

/**
 * @description renders a form for adding a pass to a digital wallet, including a
 * background color selection and an acceptance check box for the privacy policy.
 * When the "Add to Wallet" button is clicked, the form's state is dispatched to an
 * Alert component, then a canvas element is displayed with a spinning animation until
 * the form's state is updated again.
 * 
 * @returns { SVG `<button>` element, which is an HTML element. } a React component
 * that contains a form for creating a new pass, including fields for name, email,
 * and background color, and buttons for submitting the form and downloading a QR code.
 * 
 * 		- `cards`: This is an array of `Card` components, each representing a step in
 * the form submission process.
 * 		- `step`: This is the current step number in the form submission process. The
 * value ranges from 1 to 4.
 * 		- `heading`: This is the text content for the heading of each card. It is a
 * string and can be modified accordingly.
 * 		- `content`: This is the inner content of each card. It is also an array of
 * elements, each representing a part of the form content.
 * 		- `buttons`: This is an array of button components, each representing a form
 * submission action.
 * 		- `id`: This is the unique identifier for each card, used to track its position
 * in the form submission process.
 * 		- `name`: This is the name attribute value for each card, which is used to
 * identify the corresponding form field.
 * 		- `value`: This is the initial value of each card's form field, which can be
 * modified by the user during the form submission process.
 * 		- `required`: This is a boolean attribute value that indicates whether the form
 * field is required or not.
 * 		- `step`: This is a number that represents the current step number in the form
 * submission process. It can be used to determine the order of the cards and their
 * respective contents.
 * 		- `totalSteps`: This is the total number of steps in the form submission process.
 * It can be used to determine the last step of the form submission process.
 * 		- `showCardNumber`: This is a boolean attribute value that determines whether
 * the card number should be displayed or not.
 * 		- `animate`: This is a boolean attribute value that determines whether the
 * animation should be played or not.
 * 
 * 	In summary, the `Form` function returns an array of `Card` components, each
 * representing a step in the form submission process. The properties and attributes
 * of each card can be modified accordingly to represent different parts of the form
 * content.
 */
function Form() {

    /**
     * @description returns a promise that resolves to the contents of a file in an array
     * buffer format after reading it asynchronously using the FileReader API.
     * 
     * @param { object } file - file to be read as an ArrayBuffer using the `FileReader`
     * API.
     * 
     * @returns { array } an ArrayBuffer representing the contents of the specified file.
     */
    function readFileAsync(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsArrayBuffer(file);
        })
    }

    const error = function (heading, message) {
        const alert = document.getElementById('alert')
        alert.setAttribute('style', null)

        document.getElementById('heading').innerHTML = heading
        document.getElementById('message').innerHTML = message

        document.getElementById('spin').style.display = 'none'
    }

    const processFile = async function () {
        console.log(qrCode)
        console.log(file)
        if (!qrCode && !file) {
            error("Error", "Please capture a QR Code or select a file to scan");
            return;
        }

        document.getElementById('spin').style.display = 'block'

        let rawData;

        if (file) {
            let imageData
            const fileBuffer = await readFileAsync(file)

            switch (file.type) {
                case 'application/pdf':
                    console.log('pdf')
                    imageData = await processPdf(fileBuffer)
                    break
                case 'image/png':
                    console.log('png')
                    imageData = await processPng(fileBuffer)
                    break
                default:
                    error('Error', 'Invalid file type')
                    return
            }

            let code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert',
            })

            rawData = code.data;

        } else {
            rawData = qrCode.getText()
        }

        if (rawData) {
            let decoded

            try {
                decoded = decodeData(rawData)
            } catch (e) {
                error('Invalid QR code found', 'Try another method to select your certificate')
                return;
            }

            return {decoded: decoded, raw: rawData}
        } else {
            error('No QR code found', 'Try another method to select your certificate')
        }
    }

    const addToWallet = async function (event) {
        event.preventDefault()

        let result

        try {
            result = await processFile()
        } catch (e) {
            error('Error:', 'Could not extract QR code data from certificate')
        }

        if (typeof result === 'undefined') {
            return
        }

        const color = document.getElementById('color').value

        try {
            const pass = await createPass(
                {
                    decoded: result.decoded,
                    raw: result.raw,
                    color: color
                }
            )

            if (!pass) {
                error('Error:', "Something went wrong.")
            } else {
                const passBlob = new Blob([pass], {type: "application/vnd.apple.pkpass"});
                saveAs(passBlob, 'covid.pkpass')
            }
        } catch (e) {
            error('Error:', e.message)
        } finally {
            document.getElementById('spin').style.display = 'none'
        }
    }

    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [globalControls, setGlobalControls] = useState(undefined);
    const [qrCode, setQrCode] = useState(undefined);
    const [file, setFile] = useState(undefined);

    const inputFile = useRef(undefined)

    useEffect(() => {
        if (inputFile && inputFile.current) {
            inputFile.current.addEventListener('input', () => {
                let selectedFile = inputFile.current.files[0];
                if (selectedFile !== undefined) {
                    setQrCode(undefined);
                    setFile(selectedFile);
                }
            });
        }
    }, [inputFile])

    /**
     * @description triggers an action related to a file when the button is clicked.
     */
    async function showFileDialog() {
        inputFile.current.click();

    }


    /**
     * @description stops any running camera controls and sets a flag indicating that the
     * camera view is no longer open.
     */
    async function hideCameraView() {
        if (globalControls !== undefined) {
            globalControls.stop();
        }
        setIsCameraOpen(false);
    }

    /**
     * @description decodes QR codes from a video input device, displaying the camera
     * stream on a preview element.
     */
    async function showCameraView() {
        const codeReader = new BrowserQRCodeReader();

        // Needs to be called before any camera can be accessed
        await BrowserQRCodeReader.listVideoInputDevices();

        // Get preview Element to show camera stream
        const previewElem = document.querySelector('#cameraPreview');

        setGlobalControls(await codeReader.decodeFromVideoDevice(undefined, previewElem, (result, error, controls) => {

            if (result !== undefined) {
                setQrCode(result);
                setFile(undefined);

                controls.stop();

                // Reset
                setGlobalControls(undefined);
                setIsCameraOpen(false);
            }
        }));

        setIsCameraOpen(true);
    }

    return (
        <div>
            {/**
             * @description provides a UI for the user to upload a certificate or file and select
             * a color for their pass. The form then adds the data to the wallet, creating a PDF
             * or QR code pass for the user.
             * 
             * @param { string } className - 12th step form's form class name and is used to add
             * custom CSS styling to the form elements.
             * 
             * @param { string } id - 14-digit pass ID that is being added to the user's wallet.
             * 
             * @param { object } onSubmit - button's `onClick` handler, which is called when the
             * form is submitted by clicking the "Add to Wallet" button.
             */}
            <form className="space-y-5" id="form" onSubmit={(e) => addToWallet(e)}>
                <Card step={1} heading="Select Certificate" content={
                    <div className="space-y-5">
                        <p>
                            Please select the certificate screenshot or (scanned) PDF page, which you received from your
                            doctor, pharmacy, vaccination centre or online. Note that taking a picture does not work on
                            most devices yet.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <button
                                type="button"
                                onClick={isCameraOpen ? hideCameraView : showCameraView}
                                className="focus:outline-none h-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded-md">
                                {isCameraOpen ? "Stop Camera" : "Start Camera"}
                            </button>
                            <button
                                type="button"
                                onClick={showFileDialog}
                                className="focus:outline-none h-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded-md">
                                Open File (PDF, PNG)
                            </button>
                        </div>

                        <video id="cameraPreview" className={`${isCameraOpen ? undefined : "hidden"} rounded-md w-full`}/>
                        <input type='file'
                               id='file'
                               accept="application/pdf,image/png"
                               ref={inputFile}
                               style={{display: 'none'}}
                        />

                        {(qrCode || file) &&
                        <div className="flex items-center space-x-1">
                            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                            <span className="w-full">
                                {
                                    qrCode && 'Found QR Code!'
                                }
                                {
                                    file && file.name
                                }
                            </span>
                        </div>}

                    </div>
                }/>
                <Card step={2} heading="Pick a Color" content={
                    <div className="space-y-5">
                        <p>
                            Pick a background color for your pass.
                        </p>
                        <div className="relative inline-block w-full">
                            <select name="color" id="color"
                                    className="bg-gray-200 dark:bg-gray-900 focus:outline-none w-full h-10 pl-3 pr-6 text-base rounded-md appearance-none cursor-pointer">
                                <option value="white">white</option>
                                <option value="black">black</option>
                                <option value="grey">grey</option>
                                <option value="green">green</option>
                                <option value="indigo">indigo</option>
                                <option value="blue">blue</option>
                                <option value="purple">purple</option>
                                <option value="teal">teal</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd" fillRule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                }/>
                <Card step={3} heading="Add to Wallet" content={
                    <div className="space-y-5">
                        <p>
                            Data privacy is of special importance when processing health-related data.
                            In order for you to make an informed decision, please read the <a href="/privacy">Privacy
                            Policy</a>.
                        </p>
                        <label htmlFor="privacy" className="flex flex-row space-x-4 items-center">
                            <input type="checkbox" id="privacy" value="privacy" required className="h-4 w-4"/>
                            <p>
                                I accept the <a href="/privacy" className="underline">Privacy Policy</a>
                            </p>
                        </label>
                        <div className="flex flex-row items-center justify-start">
                            <button id="download" type="download"
                                    className="focus:outline-none bg-green-600 py-2 px-3 text-white font-semibold rounded-md disabled:bg-gray-400">
                                Add to Wallet
                            </button>
                            <div id="spin" style={{"display": "none"}}>
                                <svg className="animate-spin h-5 w-5 ml-2" viewBox="0 0 24 24">
                                    <circle className="opacity-0" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"/>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                }/>
            </form>
            <Alert/>
            <canvas id="canvas" style={{display: "none"}}/>
        </div>
    )
}
