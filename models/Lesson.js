const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');

const Lesson = sequelize.define('lesson', {

    l_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    l_date: {
        type: DataTypes.DATE,
    },
    l_day: {
        type: DataTypes.STRING,
    },
    l_s_time: {
        type: DataTypes.TIME,
    },
    l_e_time: {
        type: DataTypes.TIME,
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'lesson',
    timestamps: false,
},);

module.exports = Lesson;

