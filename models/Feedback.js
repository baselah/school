const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Feedback = sequelize.define(
  "feedback",
  {
    // Model attributes are defined here
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    content: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    time: {
      type: DataTypes.TIME,
    },
    student_id: {
      type: DataTypes.BIGINT,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    tableName: "feedback",
    timestamps: false,
  }
);

module.exports = Feedback;
