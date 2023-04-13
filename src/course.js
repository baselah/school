


/**
 * 
 * @api {get} /course/all get all courses
 * @apiName all course
 * @apiGroup Course
 * @apiVersion  1.0.0
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "result": [
        {
            "co_id": 4,
            "co_price": 25,
            "co_details": "25",
            "s_id": 5
        },
        {
            "co_id": 6,
            "co_price": 100,
            "co_details": "this is a math course",
            "s_id": 7
        },
     ]
 * }
 * 
 * 
 */


/**
 * 
 * @api {post} /course/create create course with subject
 * @apiName create course with subject
 * @apiGroup Course
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody {Number} co_price price of the course
 * @apiBody {String} co_details details of the course
 * @apiBody {Number} s_id id of the subject
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
       "result": {
        "co_id": 8,
        "co_price": 100,
        "co_details": "this is a math course",
        "s_id": 7
      }
 * }
 * 
 * 
 */

/**
 * 
 * @api {delete} /course/delete/:id delete course
 * @apiName delete course
 * @apiGroup Course
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the course
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "course deleted successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /course/update/price/:id update course price
 * @apiName update course price
 * @apiGroup Course
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the course
 * @apiBody {Number} co_price price of the course
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "course price updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /course/update/subject/:id update course subject
 * @apiName update course subject
 * @apiGroup Course
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the course
 * @apiBody {Number} s_id subject of the course
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "course subject updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /course/update/details/:id update course details
 * @apiName update course details
 * @apiGroup Course
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the course
 * @apiBody {String} co_details details of the course
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "course details updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {get} /course/getCourse/:id get course by id
 * @apiName get course by id
 * @apiGroup Course
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of course
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     {
 "result": {
     "co_id": 4,
     "co_price": 25,
     "co_details": "25",
     "s_id": 5
 }
}
 * }
 * 
 * 
 * 
 * 
 */

/**
 * 
 * @api {get} /course/getStudentCourses/:st_id get courses by student id 
 * @apiName get courses by student id 
 * @apiGroup Course
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} st_id student id
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     {
    "result": [
        {
            "co_id": 6,
            "co_price": 100,
            "co_details": "this is a math course",
            "s_id": 7,
            "co_st": {
                "co_st_id": 1,
                "co_id": 6,
                "st_id": 7,
                "paid": 1,
                "remained": 2,
                "cs_price": 1000,
                "finished": 0
            }
        },
        {
            "co_id": 8,
            "co_price": 100,
            "co_details": "this is a math course",
            "s_id": 7,
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