const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections.js');

class Emoji extends Model {}

Emoji.init(
    {
        emoji: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'emoji'
    }
);

module.exports = Emoji;