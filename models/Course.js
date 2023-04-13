const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const Course = sequelize.define('course', {
    // Model attributes are defined here
    co_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    co_price: {
        type: DataTypes.BIGINT,
    },
    co_details: {
        type: DataTypes.STRING,
    },
    s_id: {
        type: DataTypes.BIGINT,
        references: {
            model: 'subject',
            key: 's_id',
        }
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'course',
    timestamps: false,
},
);

module.exports = Course;