const { VALUE_TYPES, VALUE_SET_BASE_URL } = require("./constants")
const fetch = require("node-fetch")

exports.getValueSets = async function() {
  /**
   * @description retrieves JSON data from a provided URL using `fetch()` and returns
   * the result as JSON object after resolving the promise.
   * 
   * @param { string } url - URL from which the JSON data is to be retrieved through
   * the `fetch()` function, and it is used as the argument for the `fetch()` function
   * to make the HTTP request and retrieve the JSON data.
   * 
   * @returns { object } a JSON object containing data retrieved from the specified URL.
   */
  async function getJSONFromURL(url) {
    return await (await fetch(url)).json()
  }

  let valueSets = {}
  
  for (const [key, value] of Object.entries(VALUE_TYPES)) {
    valueSets[key] = await getJSONFromURL(VALUE_SET_BASE_URL + value)
  }
  
  return valueSets
}
