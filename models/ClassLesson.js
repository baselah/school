const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const ClassLesson = sequelize.define('le_cl', {
    // Model attributes are defined here
    le_cl_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    l_id: {
        type: DataTypes.INTEGER,
    },
    cl_id: {
        type: DataTypes.INTEGER,
    },
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'le_cl',
    timestamps: false,
});

module.exports =  ClassLesson;