const router = require('express').Router();

// Render homepage
router.get('/', (req, res) => {
    res.render('homepage')
});

// Render login page
router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;