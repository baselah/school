const Lesson = require('../models/Lesson');
const httpStatus = require("http-status");
const Class = require('../models/Class');

module.exports = {

    addLesson: async (req, res, next) => {

        try {

            let { l_date, l_day, l_s_time, l_e_time } = req.body;

            const result = await Lesson.create({
                l_date,
                l_day,
                l_s_time,
                l_e_time
            });
            res.status(httpStatus.CREATED).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });

        }

    },
    getLesson: async (req, res, next) => {

        try {

            let { id } = req.params;
            const result = await Lesson.findByPk(id);
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });

        }

    },

    addLessonToClass: async (req, res, next) => {

        try {

            let { l_id, cl_id } = req.body;

            const classs = await Class.findByPk(cl_id);
            const result = await classs.addLesson(l_id);

            res.status(httpStatus.CREATED).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });

        }

    },



    getLessonsClass: async (req, res, next) => {

        try {

            let { cl_id } = req.params;

            const classs = await Class.findByPk(cl_id);
            const result = await classs.getLessons();

            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }


    },



};