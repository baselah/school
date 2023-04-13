/**
 * 
 * @api {post} /notification/create Add new notification
 * @apiName Add new notification
 * @apiGroup Notification
 * @apiVersion 1.0.0
 * 
 * 
 * @apiBody  {Date} no_date date of the notification
 * @apiBody  {Time} no_time time of the notification
 * @apiBody  {Text} no_content content of the notification

 *
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "result": {
        "no_id": 1,
        "no_date": "2023-04-25T00:00:00.000Z",
        "no_time": 10,
        "no_content": "This is notification content"
    }
 * }
 * 
 * 
 */


/**
 * 
 * @api {delete} /notification/delete/:id delete notification
 * @apiName delete notification
 * @apiGroup Notification
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the notification
 * 
 *       
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": 1
 * }
 * 
 * 
 */


/**
* 
* @api {post} /notification/addnotificationtudent Add notification to student
* @apiName Add new notification to student
* @apiGroup Notification
* @apiVersion 1.0.0
* 
* 
* @apiBody  {Number} no_id id of the notification
* @apiBody  {Number} st_id id of the student

*
* 
* 
* @apiSuccessExample {json} Success-Response:
* {
*    "result": [
    {
        "no_st_id": 2,
        "st_id": 7,
        "no_id": 4
    }
 ]
* }
* 
* 
*/

/**
* 
* @api {get} /notification/getnotificationstudent/:st_id get notifications student
* @apiName get notifications student
* @apiGroup Notification
* @apiVersion 1.0.0
* 
* 
* @apiParam  {Number} st_id id of the student 
*
* 
* 
* @apiSuccessExample {json} Success-Response:
* {
*    "result": [
  {
      "no_id": 5,
      "no_date": "2023-04-13",
      "no_time": "00:00:10",
      "no_content": "This is notification content 1",
      "notification_student": {
          "no_st_id": 1,
          "no_id": 5,
          "st_id": 7,
          "no_viewed": 0
      }
  },
  {
      "no_id": 4,
      "no_date": "2023-04-13",
      "no_time": "00:00:10",
      "no_content": "This is notification content 1",
      "notification_student": {
          "no_st_id": 2,
          "no_id": 4,
          "st_id": 7,
          "no_viewed": 0
      }
  }
]
* }
* 
* 
*/


/**
 * 
 * @api {put} /notification/readnotification Read Notification
 * @apiName Read Notification
 * @apiGroup Notification
 * @apiVersion  1.0.0
 * 
 * 
 * 
 *  @apiBody  {Number} no_id id of the notification
    @apiBody  {Number} st_id id of the student

 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
         1
      ]
 * }
 * 
 * 
 */