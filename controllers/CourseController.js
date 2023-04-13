const { where } = require('sequelize');
const course = require('../models/Course');
const httpStatus = require('../util/httpStatus');
const Student = require('../models/Student');

module.exports = {

    addCourse: (req, res, next) => {

        let price = req.body.co_price;
        let details = req.body.co_details;
        let s_id = req.body.s_id;

        course.create({
            co_price: price,
            co_details: details,
            s_id: s_id,
        }).then((result) => {
            res.status(httpStatus.OK).json({ result: result });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message });
        });
    },

    deleteCourse: (req, res, next) => {

        course.destroy({
            where: {
                co_id: req.params.id
            }
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Course deleted successfully" })
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        });

    },

    updateCoursePrice: (req, res, next) => {
        var id = req.params.id;
        var price = req.body.co_price;

        course.update(
            { co_price: price }, {
            where: {
                co_id: id
            },
        }).then(() =>
            res.status(httpStatus.OK).json({ result: "Course Price updated successfuly" })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },

    updateCourseDetails: (req, res, next) => {
        var id = req.params.id;
        var details = req.body.co_details;

        course.update(
            { co_details: details }, {
            where: {
                co_id: id
            },
        }).then(() =>
            res.status(httpStatus.OK).json({ result: "Course Details updated successfuly" })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },

    updateCourseSubject: (req, res, next) => {
        var id = req.params.id;
        var s_id = req.body.s_id;

        course.update(
            { s_id: s_id }, {
            where: {
                co_id: id
            },
        }).then(() =>
            res.status(httpStatus.OK).json({ result: "Course Subject updated successfuly" })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },

    getAllCourses: (req, res, next) => {
        course.findAll(
        ).then((result) =>
            res.status(httpStatus.OK).json({ result: result })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },

    getCourse: (req, res, next) => {
        var id = req.params.id;
        course.findOne({
            where: {
                co_id: id,
            }
        }).then((result) =>
            res.status(httpStatus.OK).json({ result: result })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },

    getCoursesByStudentId: async (req, res, next) => {
        var id = req.params.st_id;

        try {
            const student = await Student.findByPk(id);
            const courses = await student.getCourses();
            res.status(httpStatus.OK).json({ result: courses })

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })

        }



    }




}