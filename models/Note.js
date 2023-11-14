const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');


const Note = sequelize.define('note', {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    date: {
        type: DataTypes.DATE,
    },
    time: {
        type: DataTypes.TIME,
    },
    content: {
        type: DataTypes.TEXT,
    },


}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'note',
    timestamps: true,
},);


module.exports = Note;