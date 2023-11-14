const manager = require('../models/Manager');
const httpStatus = require("http-status");

module.exports = {


    addManager: async (req, res, next) => {

        let name = req.body.m_username;
        let password = req.body.m_password;
        let admin = req.body.admin;

        try {
            const result = await manager.create({
                m_username: name,
                m_password: password,
                admin: admin
            });
            res.status(httpStatus.CREATED).json({ result: result });
        }
        catch (error) {
            if (error.errors[0].message.includes('m_username')) {
                res.status(httpStatus.ALREADY_REGISTERED).json({ result: 'username already existed, please choose another one' });
            }
            else
                res.status(httpStatus.BAD_REQUEST).json({ result: error.message });

        }
    },

    deleteManager: async (req, res, next) => {

        var id = req.params.id;
        await manager.destroy({
            where: {
                m_id: id
            }
        }).then(() =>
            res.status(httpStatus.OK).json({ result: "Manager deleted successfuly" })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },

    updateManagerName: (req, res, next) => {
        var id = req.params.id;
        var name = req.body.m_username;

        manager.update(
            { m_username: name }, {
            where: {
                m_id: id
            },
        }).then(() =>
            res.status(httpStatus.OK).json({ result: "Manager name updated successfuly" })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );

    },


    updateManagerPassword: (req, res, next) => {
        var id = req.params.id;
        var password = req.body.m_password;

        manager.update(
            { m_password: password }, {
            where: {
                m_id: id
            },
        }).then(() =>
            res.status(httpStatus.OK).json({ result: "Manager password updated successfuly" })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },

    updateManagerAdmin: (req, res, next) => {
        var id = req.params.id;
        var admin = req.body.admin;
        manager.update(
            { admin: admin }, {
            where: {
                m_id: id
            },
        }).then(() =>
            res.status(httpStatus.OK).json({ result: "Manager admin updated successfuly" })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },


    loginManager: async (req, res, next) => {
        let name = req.body.m_username;
        let password = req.body.m_password;


        try {
            const findManager = await manager.findOne({
                where: {
                    m_username: name,
                    m_password: password,
                }
            });
            if (findManager === null) {
                res.status(httpStatus.BAD_REQUEST).json({ result: "Invalid Login" });
            }
            else {
                res.status(httpStatus.OK).json({
                    result: {
                        id: findManager.m_id,
                        admin: findManager.admin
                    }
                });
            }
        }
        catch (error) {
            res.status(httpStatus.BAD_REQUEST).json({ result: error.message });
        }
    },
    getAllManager: (req, res, next) => {
        manager.findAll(
        ).then((result) =>
            res.status(httpStatus.OK).json({ result: result })
        ).catch((e) =>
            res.status(httpStatus.BAD_REQUEST).json({ result: e.message })
        );
    },
}