const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database')

const StudentClass = sequelize.define('student_class', {
    // Model attributes are defined here
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    student_id: {
        type: DataTypes.BIGINT,
    },
    class_id: {
        type: DataTypes.BIGINT,
    },
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'student_class',
    timestamps: false,
});

module.exports = StudentClass;