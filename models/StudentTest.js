const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const StudentTest = sequelize.define(
  "student_test",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    student_id: {
      type: DataTypes.BIGINT,
    },
    test_id: {
      type: DataTypes.BIGINT,
    },
    mark: {
      type: DataTypes.INTEGER,
    },
    passed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    tableName: "student_test",
    timestamps: false,
  }
);

module.exports = StudentTest;
