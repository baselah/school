const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Class = sequelize.define(
  "class",
  {
    // Model attributes are defined here
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
    },
    course_id: {
      type: DataTypes.BIGINT,
    },
    teacher_id: {
      type: DataTypes.BIGINT,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    tableName: "class",
    timestamps: true,
  }
);

module.exports = Class;
