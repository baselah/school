const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database')

const Subject = sequelize.define('subject', {
    // Model attributes are defined here
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
    },
    grade: {
      type: DataTypes.INTEGER
    },
   details :{
        type:DataTypes.STRING,
    }
  }, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'subject',
    timestamps: true,
  });
  
  module.exports = Subject;