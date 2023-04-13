const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const StudentClass = sequelize.define('st_cl', {
    // Model attributes are defined here
    st_cl_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    st_id: {
        type: DataTypes.INTEGER,
    },
    cl_id: {
        type: DataTypes.INTEGER,
    },
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'st_cl',
    timestamps: false,
});

module.exports = StudentClass;