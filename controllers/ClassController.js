const Course = require('../models/Course');
const Class = require('../models/Class');
const httpStatus = require("http-status");


module.exports = {

    addClass: async (req, res, next) => {

        try {
            let { cl_name, co_id, t_id } = req.body;
            const result = await Class.create({
                cl_name,
                co_id,
                t_id
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }
    },



}