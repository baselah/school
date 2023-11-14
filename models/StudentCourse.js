const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database')

const StudentCourse = sequelize.define('student_course', {
    // Model attributes are defined here
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    course_id: {
        type: DataTypes.BIGINT,
    },
    student_id: {
        type: DataTypes.BIGINT,
    },
    paid: {
        type: DataTypes.INTEGER,
    },
    remained: {
        type: DataTypes.INTEGER,
    },
    finished: {
        type: DataTypes.INTEGER,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'student_course',
    timestamps: false,
});

module.exports = StudentCourse;