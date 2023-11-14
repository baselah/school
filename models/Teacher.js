const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database')

const Teacher = sequelize.define('teacher', {
    // Model attributes are defined here
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.TEXT,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'teacher',
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['name', 'phone'],
        },
    ],
});

module.exports = Teacher;