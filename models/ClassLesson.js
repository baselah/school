const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const ClassLesson = sequelize.define(
  "class_lesson",
  {
    // Model attributes are defined here
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    lesson_id: {
      type: DataTypes.BIGINT,
    },
    class_id: {
      type: DataTypes.BIGINT,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    tableName: "class_lesson",
    timestamps: false,
  }
);

module.exports = ClassLesson;
