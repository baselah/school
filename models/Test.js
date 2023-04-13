const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');


const Test = sequelize.define('test', {
    test_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    test_date: {
        type: DataTypes.DATE,
    },
    test_day: {
        type: DataTypes.STRING,
    },
    test_s_time: {
        type: DataTypes.TIME,
    },
    test_e_time: {
        type: DataTypes.TIME,
    },
    test_details: {
        type: DataTypes.TEXT,
    },
    test_threshold: {
        type: DataTypes.INTEGER,
    },
    max_mark: {
        type: DataTypes.INTEGER,
    },
},{
    // Other model options go here
    freezeTableName: true,
    tableName: 'test',
    timestamps: false,
});

module.exports = Test;