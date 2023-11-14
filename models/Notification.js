const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');


const Notification = sequelize.define('notifications', {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    content: {
        type: DataTypes.TEXT,
    },
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'notifications',
    timestamps: true,
},);


module.exports = Notification;