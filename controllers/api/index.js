const router = require('express').Router();

const userRoutes = require('./user-route');

router.use('/user', userRoutes);

module.exports = router;