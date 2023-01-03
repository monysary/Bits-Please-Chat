const router = require('express').Router();

// Render homepage
router.get('/', (req, res) => {
    res.render('homepage')
})

module.exports = router;