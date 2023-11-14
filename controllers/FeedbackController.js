const Feedback = require('../models/Feedback');
const httpStatus = require("http-status");

module.exports = {


    addFeedback: async (req, res, next) => {

        try {

            let { f_content, f_date, f_time, st_id } = req.body;

            const result = await Feedback.create({
                f_content,
                f_date,
                f_time,
                st_id
            });
            res.status(httpStatus.OK).json({ result: "Feedback added successfully" });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })
        }

    },

    deleteFeedback: async (req, res, next) => {

        try {
            var id = req.params.id;
            await Feedback.destroy({
                where: {
                    f_id: id
                },
            });
            res.status(httpStatus.OK).json({ result: "Feedback deleted successfuly" });
        
        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });

        }




    },

}