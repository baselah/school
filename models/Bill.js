const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');


const Bill = sequelize.define('bill', {
    // Model attributes are defined here
    b_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    co_st_id: {
        type: DataTypes.BIGINT,
    },
    b_date: {
        type: DataTypes.DATE,
    },
    b_time: {
        type: DataTypes.TIME,

    },
    sum:{
        type: DataTypes.INTEGER,
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'bill',
    timestamps: false,
},
);

module.exports = Bill;