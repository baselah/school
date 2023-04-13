/**
 * 
 * @api {post} /lesson/create add lesson
 * @apiName add lesson
 * @apiGroup Lesson
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody  {Date} l_date date of the lesson
 * @apiBody  {String} l_day day of the lesson
 * @apiBody  {Time} l_s_time start time of the lesson
 * @apiBody  {Time} l_e_time end time of the lesson

 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "result": {
        "l_id": 1,
        "l_date": "2023-04-14T00:00:00.000Z",
        "l_day": "Friday",
        "l_s_time": "50:35:56",
        "l_e_time": "50:35:56"
      }
 * }
 * 
 * 
 */

/**
 * 
 * @api {get} /lesson/getlesson/:id Get lesson  by id
 * @apiName Get lesson  by id
 * @apiGroup Lesson
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the lesson
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": {
        "l_id": 1,
        "l_date": "2023-04-14",
        "l_day": "Friday",
        "l_s_time": "50:35:56",
        "l_e_time": "50:35:56"
    }
 * }
 * 
 * 
 */

/**
 * 
 * @api {post} /lesson/addlessontoclass Add lesson to Class
 * @apiName Add lesson to class
 * @apiGroup Lesson
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody  {Number} cl_id id of the class
 * @apiBody  {Number} l_id id of the lesson

 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
        {
            "le_cl_id": 3,
            "cl_id": 3,
            "l_id": 1
        }
    ]
 * }
 * 
 * 
 */


/**
 * 
 * @api {get} /lesson/getclasslessons/:cl_id get lessons of the class
 * @apiName get lessons of the class
 * @apiGroup Lesson
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} cl_id id of the class
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *            "result": [
        {
            "l_id": 1,
            "l_date": "2023-04-14",
            "l_day": "Friday",
            "l_s_time": "50:35:56",
            "l_e_time": "50:35:56",
            "le_cl": {
                "le_cl_id": 2,
                "l_id": 1,
                "cl_id": 1
            }
        }
    ]
 * }
 * 
 * 
 */