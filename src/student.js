


/**
 * 
 * @api {get} /student/all get all students
 * @apiName all student
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
        {
            "st_id": 7,
            "st_name": "haida",
            "st_password": "1122",
            "st_phone": "099555"
        },
        {
            "st_id": 21,
            "st_name": "haidarrp",
            "st_password": "12345",
            "st_phone": "0988107855"
        }
    ]
 * }
 * 
 * 
 */


/**
 * 
 * @api {post} /student/create create student
 * @apiName create student
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody {String{..15}} st_name name of the student
 * @apiBody {String} st_password password of the student
 * @apiBody {String} st_phone phone of the student
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
       "result": {
        "st_id": 44,
        "st_name": "haidtta",
        "st_password": 1122,
        "st_phone": "099555"
     }
 * }
 * 
 *  @apiErrorExample {json} Error-Response:
    {
    "result": "name already existed, please choose another one"
    }
 * 
 */

/**
 * 
 * @api {delete} /student/delete/:id delete student
 * @apiName delete student
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the student
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Student deleted successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /student/update/name/:id update student name
 * @apiName update student name
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the student
 * @apiBody {String{..15}} st_name name of the student
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Student name updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /student/update/password/:id update student password
 * @apiName update student password
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the student
 * @apiBody {String} password passsord of the student
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Student password updated successfuly"
 * }
 * 
 * 
 */

/**
* 
* @api {put} /student/update/phone/:id update student phone
* @apiName update student phone
* @apiGroup Student
* @apiVersion  1.0.0
* 
* @apiParam  {Number} id id of the student
* @apiBody {String} phone phone of the student
* 
* 
* 
* @apiSuccessExample {json} Success-Response:
* {
"result": "Student phone updated successfuly"
* }
* 
* 
*/

/**
 * 
 * @api {post} /student/login student login
 * @apiName student login
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * @apiBody {String{..15}} st_name name of the student
 * @apiBody {String} st_password password of the student
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
      "result": {
        "id": 46,
        "phone": "09955"
      }
 * }
 * @apiErrorExample {json} Error-Response:
   {
        "result": "Invalid Login"

   }
 * 
 */

/**
 * 
 * @api {get} /student/getStudent/:id get student By id
 * @apiName get student By id
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the student
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     {
 "result": {
     "st_id": 7,
     "st_name": "haida",
     "st_password": "1122",
     "st_phone": "099555"
 }
}
 * }
 * 
 * 
 */

/**
 * 
 * @api {get} /student/getCourseStudents/:id  get students by course id
 * @apiName get students by course id
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number}  id  id of course
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     {
    "result": [
        {
            "st_id": 7,
            "st_name": "haida",
            "st_password": "1122",
            "st_phone": "099555",
            "co_st": {
                "co_st_id": 2,
                "co_id": 8,
                "st_id": 7,
                "paid": 58,
                "remained": 4,
                "cs_price": 155,
                "finished": 1
            }
        }
    ]
}
 * }
 * 
 * 
 */


/**
 * 
 * @api {get} /student/getClassStudents/:id get students by class id
 * @apiName get students by class id
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number}  id  id of class
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     {
    "result": [
        {
            "st_id": 7,
            "st_name": "haida",
            "st_password": "1122",
            "st_phone": "099555",
            "st_cl": {
                "st_cl_id": 1,
                "st_id": 7,
                "cl_id": 1
            }
        },
        {
            "st_id": 21,
            "st_name": "haidarrp",
            "st_password": "12345",
            "st_phone": "0988107855",
            "st_cl": {
                "st_cl_id": 2,
                "st_id": 21,
                "cl_id": 1
            }
        }
    ]
}
 * }
 * 
 * 
 */

/**
 * 
 * @api {post} /student/addstudenttoclass add student to class
 * @apiName add student to class
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody {Number} st_id id of the student
 * @apiBody {Number} cl_id id of the class
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
        {
            "st_cl_id": 3,
            "st_id": 7,
            "cl_id": 1
        }
    ]
 * }
 * 
 * 
 */

/**
* 
* @api {post} /student/addstudenttocourse add student to course
* @apiName add student to course
* @apiGroup Student
* @apiVersion  1.0.0
* 
* 
* @apiBody {Number} st_id id of the student
* @apiBody {Number} co_id id of the course
* @apiBody {Number} paid paid of course price
* @apiBody {Number} remained remained of course price
* @apiBody {Number} cs_price price of the course
* @apiBody {Number} finished finished if student finish




* 
* @apiSuccessExample {json} Success-Response:
* {
*     "result": [
    {
        "co_st_id": 3,
        "paid": 100,
        "remained": 50,
        "cs_price": 88,
        "finished": 1,
        "st_id": 7,
        "co_id": 4
    }
    ]
* }
* 
* 
*/

/**
 * 
 * @api {post} /student/addstudentstolesson add students to lesson
 * @apiName add students to lesson
 * @apiGroup Student
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody {Number} st_id id of the student
 * @apiBody {Number} l_id id of the lesson
 * @apiBody {Number} in_check in_check lesson

 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
        {
            "st_le_id": 2,
            "in_check": 6,
            "st_id": 21,
            "l_id": 1
        }
       ]
 * }
 * 
 * 
 */