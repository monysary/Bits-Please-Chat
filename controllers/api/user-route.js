const router = require('express').Router();
const { User } = require('../../models');

// User Signup Route
router.post('/signup', async (req, res) => {
  const userData ={
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
  try {
    const userEmail = await User.findOne({
     where: {
        email: req.body.email,
      },}
    ); 
    if(userEmail){
      res.status(400).json({ message:  'Account already exists for this email' });
        return;
    } else{
      User.create(userData);
      req.session.save(() => {
        req.session.username = userData.username;
        req.session.loggedIn = true;
        res.status(200).json(userData);
      })
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// User Login Route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.usernameEl,
      },
    });
    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.passwordEl);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user = {
        id: userData.id,
        username: userData.username
      }
      req.session.loggedIn = true;
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// User Logout Route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

// Get username
router.get('/getUser', (req, res) => {
  const username = req.session.username;

  res.status(200).json(username)
})

module.exports = router;