const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const TestClass = sequelize.define(
  "test_class",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    test_id: {
      type: DataTypes.INTEGER,
    },
    class_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    tableName: "test_class",
    timestamps: false,
  }
);

module.exports = TestClass;
