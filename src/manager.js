


/**
 * 
 * @api {get} /manager/all get all managers
 * @apiName all manager
 * @apiGroup Manager
 * @apiVersion  1.0.0
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "result": [
        {
            "m_id": 20,
            "m_username": "po",
            "m_password": "145855",
            "admin": 0
        },
        {
            "m_id": 99,
            "m_username": "u",
            "m_password": "1455",
            "admin": 1
        }
    ]
 * }
 * 
 * 
 */


/**
 * 
 * @api {post} /manager/create create manager
 * @apiName create manager
 * @apiGroup Manager
 * @apiVersion  1.0.0
 * 
 * 
 * @apiBody {String{..15}} m_username user name of the manager
 * @apiBody {String} m_password password of the manager
 * @apiBody {Boolean} admin check if manager if admin
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
       "result": {
        "m_id": 102,
        "m_username": "Basel5",
        "m_password": 12345,
        "admin": "0"
      }
 * }
 * 
 *  @apiErrorExample {json} Error-Response:
    {
        "result": "username already existed, please choose another one"
    }
 * 
 */

/**
 * 
 * @api {delete} /manager/delete/:id delete manager
 * @apiName delete manager
 * @apiGroup Manager
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {Number} id id of the manager
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "Manager deleted successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /manager/update/username/:id update manager name
 * @apiName update manager user name
 * @apiGroup Manager
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the manager
 * @apiBody {String{..15}} m_username username of the manager
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
     "result": "Manager name updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {put} /manager/update/password/:id update manager password
 * @apiName update manager password
 * @apiGroup Manager
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the manager
 * @apiBody {String} m_password passsord of the manager
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "manager password updated successfuly"
 * }
 * 
 * 
 */

    /**
 * 
 * @api {put} /manager/update/admin/:id update manager admin
 * @apiName update manager admin
 * @apiGroup Manager
 * @apiVersion  1.0.0
 * 
 * @apiParam  {Number} id id of the manager
 * @apiBody {Boolean} admin check if manager if admin
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "result": "manager admin updated successfuly"
 * }
 * 
 * 
 */

/**
 * 
 * @api {post} /manager/login manager login
 * @apiName manager login
 * @apiGroup Manager
 * @apiVersion  1.0.0
 * 
 * @apiBody {String{..15}} m_username user name of the manager
 * @apiBody {String} m_password password of the manager
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
       "result": {
        "id": 104,
        "admin": 0
     }
 * }
 * @apiErrorExample {json} Error-Response:
   {
        "result": "Invalid Login"
   }
 * 
 */

