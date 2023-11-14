const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');


const NotificationStudent = sequelize.define('notification_student', {

    no_st_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    no_id: {
        type: DataTypes.INTEGER,
    },
    st_id: {
        type: DataTypes.INTEGER,
    },
    no_viewed: {
        type: DataTypes.INTEGER,
    },


}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'notification_student',
    timestamps: true,
},);


module.exports = NotificationStudent;