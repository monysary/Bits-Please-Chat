const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections.js');

class Chat extends Model {}

Chat.init(
    {
        message_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'message',
                key: 'id'
            }
        },
        user1_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        user2_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'chat'
    }
);

module.exports = Chat;