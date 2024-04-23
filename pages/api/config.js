/**
 * @description returns the API_BASE_URL environmental variable to the client through
 * JSON format with a status code of 200.
 * 
 * @param { object } req - HTTP request object that is passed to the handler function,
 * providing information about the client's request.
 * 
 * @param { object } res - Response object that contains status code and data to be
 * sent in response to a client request.
 */
export default function handler(req, res) {
    // Return the API_BASE_URL. This Endpoint allows us to access the env Variable in client javascript
    res.status(200).json({ apiBaseUrl: process.env.API_BASE_URL })
}