const { Emoji } = require('../models');

const emojiList = [
    {
        emoji_src: '/images/hello.png',
        emoji_name: 'Hello'
    },
    {
        emoji_src: '/images/no.png',
        emoji_name: 'No'
    },
    {
        emoji_src: '/images/ok.png',
        emoji_name: 'Ok'
    },
    {
        emoji_src: '/images/thank_you_please.png',
        emoji_name: 'Thank you'
    }
];

const seedEmoji = () => Emoji.bulkCreate(emojiList);

module.exports = seedEmoji;