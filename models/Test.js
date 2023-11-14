const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Test = sequelize.define(
  "test",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    date: {
      type: DataTypes.DATE,
    },
    test_day: {
      type: DataTypes.STRING,
    },
    start_time: {
      type: DataTypes.TIME,
    },
    end_time: {
      type: DataTypes.TIME,
    },
    test_details: {
      type: DataTypes.TEXT,
    },
    test_threshold: {
      type: DataTypes.INTEGER,
    },
    max_mark: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    tableName: "test",
    timestamps: false,
  }
);

module.exports = Test;
