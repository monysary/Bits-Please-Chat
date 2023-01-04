const router = require('express').Router();

// Render homepage
router.get('/', (req, res) => {
    res.render('homepage')
});

// Render login page
router.get('/login', (req, res) => {
    res.render('login')
});

// Render signup page
router.get('/signup', (req, res) => {
    res.render('signup')
});

// Render chatroom page
router.get('/chatroom', (req, res) => {
    res.render('chatroom')
});

module.exports = router;