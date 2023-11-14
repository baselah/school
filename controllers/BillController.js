const Bill = require('../models/Bill');
const httpStatus = require("http-status");


module.exports = {

    addBill: async (req, res, next) => {

        try {

            let { co_st_id, b_date, b_time, sum } = req.body;

            const result = await Bill.create({
                co_st_id,
                b_date,
                b_time,
                sum
            });
            res.status(httpStatus.OK).json({ result: result });

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }
    },



}