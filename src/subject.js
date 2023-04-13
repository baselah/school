


/**
 * 
 * @api {get} /subject/all get all subjects
 * @apiName all subject
 * @apiGroup Subject
 * @apiVersion  1.0.0
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
        {
            "s_id": 3,
            "s_name": "math",
            "grade": "100",
            "s_details": "math for class 1"
        },
        {
            "s_id": 4,
            "s_name": "science",
            "grade": "699",
            "s_details": "science for all"
        },
     ]
 * }
 * 
 * 
 */


/**
 * 
 * @api {post} /subject/create create subject
 * @apiName create subject
 * @apiGroup Subject
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody {String{..15}} s_name name of the subject
 * @apiBody {Number} geade grade of the subject
 * @apiBody {String} s_details details of the subject
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
       "result": "Subject added successfuly"
 * }
 * 
 *  @apiErrorExample {json} Error-Response:
    {
        "result": "Can't added duplicated subject"
    }
 * 
 */

/**
 * 
 * @api {delete} /subject/delete/:id delete subject
 * @apiName delete subject
 * @apiGroup Subject
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the subject
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Subject deleted successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /subject/update/name/:id update subject name
 * @apiName update subject name
 * @apiGroup Subject
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the subject
 * @apiBody {String{..15}} s_name name of the subject
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Subject name updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /subject/update/grade/:id update subject grade
 * @apiName update subject grade
 * @apiGroup Subject
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the subject
 * @apiBody {Number} grade grade of the subject
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Subject grade updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /subject/update/details/:id update subject details
 * @apiName update subject details
 * @apiGroup Subject
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the subject
 * @apiBody {String} s_details details of the subject
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Subject details updated successfuly"
 * }
 * 
 * 
 */