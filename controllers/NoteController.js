const Note = require('../models/Note');
const httpStatus = require('../util/httpStatus');



module.exports = {

    addNote: async (req, res, next) => {

        try {

            let { note_date, note_time, note_content } = req.body;
            const result = await Note.create({
                note_date,
                note_time,
                note_content
            });
            res.status(httpStatus.CREATED).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }

    },

    deleteNote: async (req, res, next) => {

        try {

            let { id } = req.params;

            const result = await Note.destroy({
                where: {
                    note_id: id
                }
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }


    },



}