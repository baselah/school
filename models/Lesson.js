const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Lesson = sequelize.define('lesson', {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    date: {
        type: DataTypes.DATE,
    },
    day: {
        type: DataTypes.STRING,
    },
    start_time: {
        type: DataTypes.TIME,
    },
    end_time: {
        type: DataTypes.TIME,
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'lesson',
    timestamps: false,
},);

module.exports = Lesson;

