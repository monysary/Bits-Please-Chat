const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections.js');

class Message extends Model {}

Message.init(
    {
        message: {
            // type: emoji/stickers,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        chat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'chat',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'message'
    }
);

module.exports = Message;