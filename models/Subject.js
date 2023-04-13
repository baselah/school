const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const Subject = sequelize.define('subject', {
    // Model attributes are defined here
    s_id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    s_name: {
      type: DataTypes.STRING,
    },
    grade: {
      type: DataTypes.INTEGER
    },
    s_details :{
        type:DataTypes.STRING,
    }
  }, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'subject',
    timestamps: false,
  });
  
  module.exports = Subject;