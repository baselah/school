const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const StudentTest = sequelize.define('st_test', {
    st_test_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    st_id: {
        type: DataTypes.INTEGER,
    },
    test_id: {
        type: DataTypes.INTEGER,
    },
    mark: {
        type: DataTypes.INTEGER,
    },
    passed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'st_test',
    timestamps: false,
},
);

module.exports = StudentTest;