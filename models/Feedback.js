const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data');


const Feedback = sequelize.define('feedback', {
    // Model attributes are defined here
    f_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    f_content: {
        type: DataTypes.STRING,
    },
    f_date: {
        type: DataTypes.DATE,
    },
    f_time: {
        type: DataTypes.TIME,
    },
    st_id:{
        type: DataTypes.BIGINT,
        
    }

}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'feedback',
    timestamps: false,
},
);

module.exports = Feedback;