const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');


const Notification = sequelize.define('notifications', {

    no_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    no_date: {
        type: DataTypes.DATE,
    },
    no_time: {
        type: DataTypes.TIME,
    },
    no_content: {
        type: DataTypes.TEXT,
    },


}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'notifications',
    timestamps: false,
},);


module.exports = Notification;