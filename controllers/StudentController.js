const Student = require('../models/Student');
const httpStatus = require('../util/httpStatus');
const Course = require('../models/Course');
const Class = require('../models/Class');
const Lesson = require('../models/Lesson');

module.exports = {

    addStudent: async (req, res, next) => {


        let name = req.body.st_name;
        let password = req.body.st_password;
        let phone = req.body.st_phone;
        try {
            const result = await Student.create({
                st_name: name,
                st_password: password,
                st_phone: phone,
            });
            res.status(httpStatus.CREATED).json({ result: result });
        }
        catch (error) {
            if (error.errors[0].message.includes('st_name')) {
                res.status(httpStatus.ALREADY_REGISTERED).json({ result: 'name already existed, please choose another one' });
            }
            else if (error.errors[0].message.includes('st_phone')) {
                res.status(httpStatus.ALREADY_REGISTERED).json({ result: 'phone already existed, please choose another one' });
            }
            else
                res.status(httpStatus.BAD_REQUEST).json({ result: error.message });

        }
    },

    deleteStudent: (req, res, next) => {

        var id = req.params.id;
        Student.destroy({
            where: {
                st_id: id
            }
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Student deleted successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message });
        });
    },

    updateStudentName: (req, res, next) => {
        var id = req.params.id;
        var name = req.body.st_name;

        Student.update(
            { st_name: name }, {
            where: {
                st_id: id
            },
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Student name updated successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message });
        });
    },


    updateStudentPhone: (req, res, next) => {
        var id = req.params.id;
        var phone = req.body.st_phone;

        Student.update(
            { st_phone: phone }, {
            where: {
                st_id: id
            },
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Student phone updated successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message });
        });
    },

    updateStudentPassword: (req, res, next) => {
        var id = req.params.id;
        var password = req.body.st_password;

        Student.update(
            { st_password: password }, {
            where: {
                st_id: id
            },
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Student password updated successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message });
        });;
    },

    loginStudent: async (req, res, next) => {


        let name = req.body.st_name;
        let password = req.body.st_password;

        try {
            const findStudent = await Student.findOne({
                where: {
                    st_name: name,
                    st_password: password,
                }
            });
            if (findStudent === null) {
                res.status(httpStatus.BAD_REQUEST).json({ result: "Invalid Login" });
            }
            else {
                res.status(httpStatus.OK).json({
                    result: {
                        id: findStudent.st_id,
                        phone: findStudent.st_phone,
                    }
                });
            }
        }
        catch (e) {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message });

        }
    },
    getAllStudent: (req, res, next) => {
        Student.findAll(
        ).then((result) =>
            res.status(httpStatus.OK).json({ result: result })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },
    getStudent: (req, res, next) => {
        var id = req.params.id;
        Student.findOne({
            where: {
                st_id: id,
            }
        }).then((result) =>
            res.status(httpStatus.OK).json({ result: result })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },


    addStudentsToCourse: async (req, res, next) => {

        try {
            let { co_id, st_id, paid, remained, cs_price, finished } = req.body;
            const student = await Student.findByPk(st_id);

            const result = await student.addCourse(co_id, {
                through: {
                    paid,
                    remained,
                    cs_price,
                    finished
                }
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }

    },
    addStudentsToClass: async (req, res, next) => {

        try {
            let { cl_id, st_id, } = req.body;
            const student = await Student.findByPk(st_id);

            const result = await student.addClass(cl_id);

            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }


    },

    addStudentsToLesson: async (req, res, next) => {

        try {
            let { st_id, l_id, in_check } = req.body;
            const student = await Student.findByPk(st_id);

            const result = await student.addLesson(l_id, {
                through: {
                    in_check,
                }
            });

            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }


    },

    getStudentsByClassId: async (req, res, next) => {
        var id = req.params.id;
        try {

            const classs = await Class.findByPk(id);
            const students = await classs.getStudents();
            res.status(httpStatus.OK).json({ result: students })

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })

        }


    },
    getStudentsByCourseId: async (req, res, next) => {
        var id = req.params.id;


        try {

            const course = await Course.findByPk(id);
            const students = await course.getStudents();
            res.status(httpStatus.OK).json({ result: students })

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })

        }

    },


}