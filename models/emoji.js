const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections.js');

class Emoji extends Model {}

Emoji.init(
    {
        emoji_src: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emoji_name: {
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