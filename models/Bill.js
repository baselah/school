const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Bill = sequelize.define(
  "bill",
  {
    // Model attributes are defined here
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    co_st_id: {
      type: DataTypes.BIGINT,
    },
    date: {
      type: DataTypes.DATE,
    },
    time: {
      type: DataTypes.TIME,
    },
    total: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    tableName: "bills",
    timestamps: false,
  }
);

module.exports = Bill;
