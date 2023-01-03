const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections.js');

class Message extends Model {}

Message.init(
    {
        emoji_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'emoji',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'user',
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