const Schedule = require('../models/Schedule');
const httpStatus = require("http-status");

module.exports = {

    addSchedule: async (req, res, next) => {

        console.log(req.body);
        try {

            let { schedule } = req.body;

            const result = await Schedule.bulkCreate(schedule);

            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })
        }

    },


    getSchedulesClass: async (req, res, next) => {


        try {

            let { cl_id } = req.params;
            const result = await Schedule.findAll({
                where: {
                    cl_id: cl_id
                }
            });

            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })

        }
    },

    addDayToSchedule: async (req, res, next) => {
        try {

            let { sch_date, sch_day, s_time, e_time, period_check, cl_id } = req.body;

            const result = await Schedule.create({
                sch_date,
                sch_day,
                s_time,
                e_time,
                period_check,
                cl_id
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })
        }

    },

    deleteDayFromSchedule: async (req, res, next) => {
        try {

            let { sch_id } = req.params;

            const result = await Schedule.destroy({
                where: {
                    sch_id: sch_id,
                }
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })
        }

    },

    updateStime: async (req, res, next) => {
        try {

            let { sch_id } = req.params;
            let { s_time } = req.body;

            const result = await Schedule.update(
                { s_time: s_time }, {
                where: {
                    sch_id: sch_id,
                }
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })
        }

    },

    updateEtime: async (req, res, next) => {
        try {

            let { sch_id } = req.params;
            let { e_time } = req.body;

            const result = await Schedule.update(
                { e_time: e_time }, {
                where: {
                    sch_id: sch_id,
                }
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })
        }

    },

    updatePeriodCheck: async (req, res, next) => {
        try {

            let { sch_id } = req.params;
            let { period_check } = req.body;

            const result = await Schedule.update(
                { period_check: period_check }, {
                where: {
                    sch_id: sch_id,
                }
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message })
        }

    },






}