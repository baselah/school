/**
 * 
 * @api {post} /note/create Add new note
 * @apiName Add new note
 * @apiGroup Note
 * @apiVersion 1.0.0
 * 
 * 
 * @apiBody  {Date} note_date date of the note
 * @apiBody  {Time} note_time time of the note
 * @apiBody  {Text} note_content content of the note

 *
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "result": {
        "note_id": 1,
        "note_date": "2023-04-25T00:00:00.000Z",
        "note_time": 10,
        "note_content": "This is note content"
    }
 * }
 * 
 * 
 */


    /**
     * 
     * @api {delete} /note/delete/:id delete note
     * @apiName delete note
     * @apiGroup Note
     * @apiVersion  1.0.0
     * 
     * 
     * @apiParam  {Number} id id of the note
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