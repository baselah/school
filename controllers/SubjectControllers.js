const subject = require('../models/Subject');
const sequelize = require('../util/database');
const httpStatus = require("http-status");

module.exports = {


    addSubject: async (req, res, next) => {

        let name = req.body.s_name;
        let gradee = req.body.grade;
        let details = req.body.s_details;


        try {

            const findSubject = await subject.findOne({
                where: {
                    s_name: name,
                    grade: gradee,
                    s_details: details,
                }
            });



            if (findSubject === null) {

                subject.create({
                    s_name: name,
                    grade: gradee,
                    s_details: details,
                }).then(() => {
                    res.status(httpStatus.OK).json({ result: "Subject added successfuly" });
                });
            }
            else {
                res.status(200).json({ result: "Can't added duplicated subject" });
            }
        }
        catch (e) {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message });
        }
    },

    deleteSubject: (req, res, next) => {

        var id = req.params.id;
        subject.destroy({
            where: {
                s_id: id
            }
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Subject deleted successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        });
    },
    updateSubjectGrade: (req, res, next) => {
        var id = req.params.id;
        var gradee = req.body.s_grade;

        subject.update(
            { grade: gradee }, {
            where: {
                s_id: id
            },
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Subject grade updated successfuly" })
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        });
    },

    updateSubjectDetails: (req, res, next) => {
        var id = req.params.id;
        var details = req.body.s_details;

        subject.update(
            { s_details: details }, {
            where: {
                s_id: id
            },
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Subject details updated successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        });
    },

    updateSubjectName: (req, res, next) => {
        var id = req.params.id;
        var name = req.body.s_name;

        subject.update(
            { s_name: name }, {
            where: {
                s_id: id
            },
        }).then(() => {
            res.status(httpStatus.OK).json({ result: "Subject name updated successfuly" });
        }).catch((e) => {
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        });
    },

    getAllSubject: (req, res, next) => {
        subject.findAll(
        ).then((result) =>
            res.status(httpStatus.OK).json({ result: result })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },
}

