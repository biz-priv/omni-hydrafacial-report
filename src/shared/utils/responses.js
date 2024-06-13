// send response
/*
* File: src\shared\utils\responses.js
* Project: Omni-hydrafacial-report
* Author: Bizcloud Experts
* Date: 2022-03-04
* Confidential and Proprietary
*/
function send_response(http_code, resp = null) {
    var resonseData;
    if (resp) {
      var responseData = resp;
    }
    return {
      statusCode: http_code,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseData),
    };
  }
  
  /*============================================================= */
  module.exports = { send_response };
  