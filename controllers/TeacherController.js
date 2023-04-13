const teacher = require('../models/Teacher');
const httpStatus = require('../util/httpStatus');


module.exports = {
    addTeacher: async (req, res, next) => {

        let { t_name, t_phone } = req.body;


        try {
            const result = await teacher.create({
                t_name,
                t_phone
            });
            res.status(httpStatus.CREATED).json({ result: result });
        }
        catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }
    },


    deleteTeacher: (req, res, next) => {

        var id = req.params.id;
        teacher.destroy({
            where: {
                t_id: id
            }
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Teacher deleted successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        });
    },

    updateTeacherName: (req, res, next) => {
        var id = req.params.id;
        var name = req.body.t_name;

        teacher.update(
            { t_name: name }, {
            where: {
                t_id: id
            },
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Teacher name updated successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        });
    },

    updateTeacherPhone: (req, res, next) => {
        var id = req.params.id;
        var phone = req.body.t_phone;

        teacher.update(
            { t_phone: phone }, {
            where: {
                t_id: id
            },
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Teacher phone updated successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        });
    },

    getAllTeacher: (req, res, next) => {
        teacher.findAll(
        ).then((result) =>
            res.status(httpStatus.OK).json({ result: result })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },
}