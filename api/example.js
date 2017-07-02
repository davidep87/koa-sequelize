/**
* @fileOverview Endpoint for example
* @module Example
*/

/**
 * Endpoint: /api/example
 * Method: GET
 * @function
 * @name get
 * @return {string} This is just an example!
 */
exports.example = async (ctx) => {
  ctx.body = 'This is just an example'
}
