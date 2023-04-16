const Test = require('../models/Test');
const Class = require('../models/Class');
const httpStatus = require('../util/httpStatus');
const Student = require('../models/Student');


module.exports = {


    addTest: async (req, res, next) => {

        try {
            let { test_date, test_day, test_s_time, test_e_time, test_details, test_threshold, max_mark } = req.body;

            const result = await Test.create({
                test_date,
                test_day,
                test_s_time,
                test_e_time,
                test_details,
                test_threshold,
                max_mark
            });
            res.status(httpStatus.CREATED).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }


    },

    linkTestClass: async (req, res, next) => {

        let { test_id, cl_id } = req.body;

        try {

            const test = await Test.findByPk(test_id);


            const result = await test.addClass(cl_id);

            res.status(httpStatus.OK).json({ result: "Test add to class successfully" });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });

        }
    },

    addMark: async (req, res, next) => {

        try {
            let { test_id, st_id, mark } = req.body;
            const test = await Test.findByPk(test_id);

            const result = await test.addStudent(st_id, { through: { mark: mark } });

            res.status(httpStatus.OK).json({ result: "Mark add successfully" });


        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }

    },

    updateMark: async (req, res, next) => {

        try {
            let { test_id, st_id, mark } = req.body;
            const test = await Test.findByPk(test_id);

            const result = await test.addStudents(st_id, { through: { mark: mark } });

            res.status(httpStatus.OK).json({ result: result });


        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }

    }








}