const User = require('./user');
const Chat = require('./chat');
const Message = require('./message');
const Emoji = require('./emoji');

Chat.hasMany(Message, {
    foreignKey: 'chat_id'
});

Message.belongsTo(Chat, {
    foreignKey: 'chat_id'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Message, {
    foreignKey: 'user_id'
});

Message.hasOne(Emoji, {
    foreignKey: 'emoji_id'
});

module.exports = {
    User,
    Chat,
    Message,
    Emoji
}