const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const Student = sequelize.define('student', {
    // Model attributes are defined here
    st_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    st_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    st_password: {
        type: DataTypes.STRING
    },
    st_phone: {
        type: DataTypes.TEXT,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'student',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['st_name', 'st_phone'],
        },
    ],
});

module.exports = Student;