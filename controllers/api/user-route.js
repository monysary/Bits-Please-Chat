const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }
    );
    req.session.save(() => {
      // req.session.user_id = userData.id;
      // req.session.username = userData.username;
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;