const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const StudentCourse = sequelize.define('co_st', {
    // Model attributes are defined here
    co_st_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    co_id: {
        type: DataTypes.INTEGER,
    },
    st_id: {
        type: DataTypes.INTEGER,
    },
    paid: {
        type: DataTypes.INTEGER,
    },
    remained: {
        type: DataTypes.INTEGER,
    },
    cs_price: {
        type: DataTypes.INTEGER,
    },
    finished: {
        type: DataTypes.INTEGER,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'co_st',
    timestamps: false,
});

module.exports = StudentCourse;