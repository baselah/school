const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/data')

const Manager = sequelize.define('manager', {
    // Model attributes are defined here
    m_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    m_username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    m_password: {
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
            fields: ['m_username'],
        },
    ],
},
);

module.exports = Manager;