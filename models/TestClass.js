const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');


const TestClass = sequelize.define('test_cl', {
    test_cl_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    test_id:{
        type: DataTypes.INTEGER,
    },
    cl_id:{
        type: DataTypes.INTEGER,
    },

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'test_cl',
    timestamps: false,
});

module.exports = TestClass;