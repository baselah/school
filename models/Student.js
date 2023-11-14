const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database')

const Student = sequelize.define('student', {
    // Model attributes are defined here
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.TEXT,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'student',
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['name', 'phone'],
        },
    ],
});

module.exports = Student;