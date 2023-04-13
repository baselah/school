
/**
 * 
 * @api {post} /feedback/addfeedback add new feedback
 * @apiName add new feedback
 * @apiGroup Feedback
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody  {String} f_content content of feedback
 * @apiBody  {Date} f_date date of feedback
 * @apiBody  {Time} f_time time of feedback
 * @apiBody  {Number} st_id id of the student

 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *    "result": "Feedback added successfully"
 * }
 * 
 * 
 */

/**
 * 
 * @api {delete} /feedback/delete/:id delete feedback
 * @apiName delete feedback
 * @apiGroup Feedback
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the feedback
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Feedback deleted successfuly"
 * }
 * 
 * 
 */
