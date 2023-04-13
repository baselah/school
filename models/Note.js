const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');


const Note = sequelize.define('note', {

    note_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    note_date: {
        type: DataTypes.DATE,
    },
    note_time: {
        type: DataTypes.TIME,
    },
    note_content: {
        type: DataTypes.TEXT,
    },


}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'note',
    timestamps: false,
},);


module.exports = Note;