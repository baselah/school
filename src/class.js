/**
 * 
 * @api {post} /class/create Add class with course 
 * @apiName add class with course
 * @apiGroup Class
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody  {String} cl_name name of the class
 * @apiBody  {Number} co_id id of the course
 * @apiBody  {Number} t_id id of the test
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "result": {
        "cl_id": 3,
        "cl_name": "last class",
        "co_id": 4,
        "t_id": 100
      }
 * }
 * 
 * 
 */