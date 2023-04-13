const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');

const Schedule = sequelize.define('schedule', {
    sch_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    period_check: {
        type: DataTypes.INTEGER,
    },
    s_time: {
        type: DataTypes.TIME,
    },
    e_time: {
        type: DataTypes.TIME,
        allowNull : true,
    },
    sch_day: {
        type: DataTypes.STRING,
    },
    sch_date:{
        type : DataTypes.DATE,
    },
    cl_id :{
        type : DataTypes.BIGINT,
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'schedule',
    timestamps: false,
},);

module.exports = Schedule;
