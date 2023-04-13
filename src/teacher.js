


/**
 * 
 * @api {get} /teacher/all get all teachers
 * @apiName all teacher
 * @apiGroup Teacher
 * @apiVersion  1.0.0
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "result": [
        {
            "t_id": 2,
            "t_name": "teacher100",
            "t_phone": 224645
        },
        {
            "t_id": 7,
            "t_name": "teacher10",
            "t_phone": 22464
        }
     ]
 * }
 * 
 * 
 */


/**
 * 
 * @api {post} /teacher/create create teacher
 * @apiName create teacher
 * @apiGroup Teacher
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody {String{..15}} t_name name of the teacher
 * @apiBody {String} t_phone phone of the teacher
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": {
        "t_id": 7,
        "t_name": "teacher10",
        "t_phone": "22464"
      }  
    }
 * 
 *  @apiErrorExample {json} Error-Response:
    {
        "result": "Validation error"
    }
 * 
 */

/**
 * 
 * @api {delete} /teacher/delete/:id delete teacher
 * @apiName delete teacher
 * @apiGroup Teacher
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the teacher
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
      "result": "teacher deleted successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /teacher/update/name/:id update teacher name
 * @apiName update teacher name
 * @apiGroup Teacher
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the teacher
 * @apiBody {String{..15}} t_name name of the teacher
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "teacher name updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /teacher/update/phone/:id update teacher phone
 * @apiName update teacher phone
 * @apiGroup Teacher
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the teacher
 * @apiBody {String} t_phone phone of the teacher
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
      "result": "teacher phone updated successfuly"
 * }
 * 
 * 
 */

