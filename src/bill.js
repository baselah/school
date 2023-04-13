/**
 * 
 * @api {post} /bill/create Create new bill
 * @apiName Create new bill
 * @apiGroup Bill
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody  {Number} co_st_id id of course student
 * @apiBody  {Date} b_date date of the bill
 * @apiBody  {Time} b_time time of the bill
 * @apiBody  {Number} sum sum of the bill

 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "result": {
        "b_id": 3,
        "co_st_id": 1,
        "b_date": "2023-04-14T00:00:00.000Z",
        "b_time": "17:35:56",
        "sum": 88
       }
 * }
 * 
 * 
 */