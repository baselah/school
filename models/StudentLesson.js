const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const StudentLesson = sequelize.define('st_le', {

    st_le_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    st_id: {
        type: DataTypes.BIGINT,
    },
    l_id: {
        type: DataTypes.BIGINT,
    },
    in_check : {
        type: DataTypes.INTEGER,
    }
},{
    // Other model options go here
    freezeTableName: true,
    tableName: 'st_le',
    timestamps: false,
});

module.exports = StudentLesson;