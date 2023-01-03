const sequelize = require('../config/connections.js');
const seedEmoji = require('./emoji-seed');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n-----DATABASE SYNCED-----\n');
    
    await seedEmoji();
    console.log('\n-----EMOJIS SYNCED-----\n');

    process.exit(0)
}

seedAll();