// Setting up dependencies
const express = require('express');
const sequelize = require('./config/connections');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session')
const hbs = exphbs.create({});
const http = require('http'); //setting up socket.io
const socketio = require('socket.io'); //setting up socket.io

const app = express();
const server = http.createServer(app); //setting up socket.io
const io = socketio(server); //Griffin added
const PORT = process.env.PORT || 3001;

// Setting up handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// Run when a client connects GRIFFIN ADDED
io.on('connection', socket => {
    console.log('New WS Connection...');

    // Welcomes the user to the chatroom
    socket.emit('message', 'Welcome to Bits Please!')

    // Broadcast to others when a user connects 
    socket.broadcast.emit('message', 'A user has joined the chat!');

    // Runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat!');
    });

    // Listening for the chatMessage event
    socket.on('chatMessage', (msg) => {
        // console.log(msg);
        io.emit('message', msg);
    });
});

// Setting up sessions
const sess = {
    secret: 'the secret string',
    resave: false,
    saveUninitialized: false
};
app.use(session(sess));

// Setting up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./controllers'));

// App listening on PORT
sequelize.sync().then(() => {
    server.listen(PORT, () => console.log(`Application listening at http://localhost:${PORT}`)) //changed from app to server for socket.io
});


// Socket.io code Griffin added

