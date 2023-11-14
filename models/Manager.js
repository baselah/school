const {  DataTypes } = require('sequelize');
const sequelize = require('../util/database')

const Manager = sequelize.define('manager', {
    // Model attributes are defined here
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.INTEGER,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    tableName: 'manager',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['username'],
        },
    ],
},
);

module.exports = Manager;