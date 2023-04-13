const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');


const Class = sequelize.define('class', {
    // Model attributes are defined here
    cl_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    cl_name: {
        type: DataTypes.STRING,
    },
    co_id: {
        type: DataTypes.INTEGER,
    },
    t_id: {
        type: DataTypes.INTEGER,

    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'class',
    timestamps: false,
},
);

module.exports = Class;