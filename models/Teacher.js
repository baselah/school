const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const Teacher = sequelize.define('teacher', {
    // Model attributes are defined here
    t_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    t_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    t_phone: {
        type: DataTypes.TEXT,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'teacher',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['t_name', 't_phone'],
        },
    ],
});

module.exports = Teacher;