const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Schedule = sequelize.define('schedule', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    period_check: {
        type: DataTypes.INTEGER,
    },
    start_time: {
        type: DataTypes.TIME,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull : true,
    },
    sch_day: {
        type: DataTypes.STRING,
    },
    sch_date:{
        type : DataTypes.DATE,
    },
    class_id :{
        type : DataTypes.BIGINT,
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'schedule',
    timestamps: false,
},);

module.exports = Schedule;
