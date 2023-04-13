/**
 * 
 * @api {Post} /test/addtest Add new Test
 * @apiName add new test
 * @apiGroup Test
 * @apiVersion  1.0.0
 * 
 * @apiBody {Date} test_date date of the test
 * @apiBody {String{..15}} test_day day of the test
 * @apiBody  {Time} test_s_time time of starting test
 * @apiBody  {Time} test_e_time time of ending test
 * @apiBody {Text} test_details details of the test
 * @apiBody {Number} test_threshold threshold of the test
 * @apiBody {Number} max_mark max mark of the test
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": {
        "test_id": 2,
        "test_date": "2023-04-14T00:00:00.000Z",
        "test_day": "montag",
        "test_s_time": "17:35:56",
        "test_e_time": "50:35:56",
        "test_details": "this is second test",
        "test_threshold": 11,
        "max_mark": 150
    }
}
 * 
 * 
 */

/**
 * 
 * @api {post} /test/linktestClass Link test to class
 * @apiName link test to class
 * @apiGroup Test
 * @apiVersion  1.0.0
 * 
 * 
   @apiBody {Number} test_id id of the test
 * @apiBody {Number} cl_id id of the class 
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     result : "Test add to class successfully"
 * }
 * 
 * 
 */

/**
 * 
 * @api {post} /test/addmark add test mark of the student
 * @apiName add test mark of the student
 * @apiGroup Test
 * @apiVersion  1.0.0
 * 
 * 
   @apiBody {Number} test_id id of the test
 * @apiBody {Number} st_id id of the student 
 * @apiBody {Number} mark test mark 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
         "result": "Mark add successfully"
 * }
 * 
 * 
 */

/**
* 
* @api {put} /test/editmark edit test mark of the student
* @apiName edit test mark of the student
* @apiGroup Test
* @apiVersion  1.0.0
* 
* 
@apiBody {Number} test_id id of the test
* @apiBody {Number} st_id id of the student 
* @apiBody {Number} mark test mark 
* 
* 
* 
* 
* @apiSuccessExample {json} Success-Response:
* {
      "result": [
        [
            1
        ]
     ]
* }
* 
* 
*/