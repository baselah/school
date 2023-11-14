const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const StudentLesson = sequelize.define(
  "student_lesson",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    student_id: {
      type: DataTypes.BIGINT,
    },
    lesson_id: {
      type: DataTypes.BIGINT,
    },
    in_check: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    tableName: "student_lesson",
    timestamps: false,
  }
);

module.exports = StudentLesson;
