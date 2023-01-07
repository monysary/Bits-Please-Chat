// Setting up dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session')
const hbs = exphbs.create({});
const http = require('http'); 
const socketio = require('socket.io'); 
const app = express();
const server = http.createServer(app); 
const io = socketio(server); 
const PORT = process.env.PORT || 3001;


// Run when a client connects 
io.on('connection', socket => {
    console.log('New WS Connection...');
    
    // Broadcast to others when a user connects 
    socket.broadcast.emit('serverMessage', 'A user has joined the chat!');
    
    // Runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('serverMessage', 'A user has left the chat!');
    });
    
    // Listening for the chatMessage event
    socket.on('chatMessage', (msg) => {
        // console.log(msg);
        let messages = [];
        if (messages[messages.length - 1] != msg) {
            messages.push(msg);
            console.log(messages);
            io.emit('add-message', messages);
        }       
    });
});

const sequelize = require('./config/connections');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Setting up sessions
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'the secret string',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
};
app.use(session(sess));

// Setting up handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// Setting up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./controllers'));

// App listening on PORT
// sequelize.sync().then(() => {
//     server.listen(process.env.PORT || 3001, () => console.log(`Application listening at http://localhost:${process.env.PORT || 3001}`)) 
// });

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });