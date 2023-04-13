/**
 * 
 * @api {post} /schedule/create Add new Schedule To Class
 * @apiName Add new Schedule To Class
 * @apiGroup Schedule
 * @apiVersion 1.0.0
 * 
 * 
   @apiBody  {List} schedule List of days 
 *
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
        {
            "sch_id": 3,
            "sch_date": "2023-05-14T00:00:00.000Z",
            "sch_day": "Thursday",
            "s_time": 5,
            "e_time": 6,
            "period_check": 1,
            "cl_id": 3
        },
        {
            "sch_id": 4,
            "sch_date": "2023-06-14T00:00:00.000Z",
            "sch_day": "Friday",
            "s_time": 5,
            "e_time": 6,
            "period_check": 1,
            "cl_id": 3
        }
    ]
 * }
 * 
 * 
 */

/**
 * 
 * @api {get} /schedule/getschedules/:cl_id get schedules class
 * @apiName get schedules class
 * @apiGroup Schedule
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} cl_id id of the class
 *        
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
  {
      "sch_id": 1,
      "period_check": 1,
      "s_time": "00:00:05",
      "e_time": "00:00:06",
      "sch_day": "Saturday",
      "sch_date": "2023-05-14",
      "cl_id": 3
  },
  {
      "sch_id": 2,
      "period_check": 1,
      "s_time": "00:00:05",
      "e_time": "00:00:06",
      "sch_day": "Thursday",
      "sch_date": "2023-05-14",
      "cl_id": 3
   }
  ]
 * }
 * 
 * 
 */


/**
 * 
 * @api {post} /schedule/addday Add new day to Schedule 
 * @apiName Add new day to Schedule
 * @apiGroup Schedule
 * @apiVersion 1.0.0
 * 
 * 
   @apiBody  {Date} sch_date date of the Schedule
 * @apiBody  {String} sch_day day of the Schedule
 * @apiBody  {Time} s_time start time of the Schedule
 * @apiBody  {Time} e_time end time of the Schedule
 * @apiBody  {Number} period_check period check of the Schedule
 * @apiBody  {Number} cl_id id of the class  
 *
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": {
        "sch_id": 1,
        "sch_date": "2023-05-14T00:00:00.000Z",
        "sch_day": "Saturday",
        "s_time": 5,
        "e_time": 6,
        "period_check": 1,
        "cl_id": 3
      }
 * }
 * 
 * 
 */


/**
 * 
 * @api {delete} /deleteday/:sch_id delete day 
 * @apiName delete day
 * @apiGroup Schedule
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} sch_id id of the schedule
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
 * @api {put} /updatestime/:sch_id update s_time 
 * @apiName update s_time
 * @apiGroup Schedule
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} sch_id id of the schedule
 * @apiBody  {Time} s_time start time
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


  /**
 * 
 * @api {put} /updateetime/:sch_id update e_time 
 * @apiName update e_time
 * @apiGroup Schedule
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} sch_id id of the schedule
 * @apiBody  {Time} e_time end time
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


 /**
 * 
 * @api {put} /updateperiodcheck/:sch_id update period_check 
 * @apiName update period_check
 * @apiGroup Schedule
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} sch_id id of the schedule
 * @apiBody  {Number} period_check period check
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "result": [
          1
        ]
 * }
 * 
 * 
 */