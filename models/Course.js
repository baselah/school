const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database')

const Course = sequelize.define('course', {
    // Model attributes are defined here
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    price: {
        type: DataTypes.BIGINT,
    },
    details: {
        type: DataTypes.STRING,
    },
    subject_id: {
        type: DataTypes.BIGINT,
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'course',
    timestamps: true,
},
);

module.exports = Course;