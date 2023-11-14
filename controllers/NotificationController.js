const Notification = require('../models/Notification');
const Student = require('../models/Student');
const httpStatus = require("http-status");


module.exports = {

    addNotification: async (req, res, next) => {

        try {

            let { no_date, no_time, no_content } = req.body;
            const result = await Notification.create({
                no_date,
                no_time,
                no_content
            });
            res.status(httpStatus.CREATED).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }

    },

    deleteNotification: async (req, res, next) => {

        try {

            let { id } = req.params;

            const result = await Notification.destroy({
                where: {
                    no_id: id
                }
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }
    },

    addNotificationToStudent: async (req, res, next) => {

        try {

            let { no_id, st_id } = req.body;

            const student = await Student.findByPk(st_id);

            const result = await student.addNotification(no_id);

            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }

    },

    getNotificationsStudent: async (req, res, next) => {

        try {

            let { st_id } = req.params;

            const student = await Student.findByPk(st_id);
            const result = await student.getNotifications();

            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }

    },

    updateReadNotification: async (req, res, next) => {

        try {

            let { no_id, st_id } = req.body;

            const student = await Student.findByPk(st_id);

            const result = await student.addNotifications(no_id, { through: { no_viewed: 1 } });

            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }

    },



}