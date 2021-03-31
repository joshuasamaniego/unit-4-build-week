const router = require('express').Router();
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets/index');
const Users = require('../users/users-model');
const { checkValidCredentials, loginCredentials } = require('./auth-middleware');

router.post('/register', checkValidCredentials, async (req, res, next) => {
    // Making the hash
    const credentials = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 5;
    const hash = bcryptjs.hashSync(credentials.user_password, rounds);
    credentials.user_password = hash;
    // handling newUser
    const newUser = await Users.addUser(credentials);
    try {
        res.status(201).json(newUser);
    } catch(err) { next(err) }
})

router.post('/login', loginCredentials, async (req, res, next) => {
    const { user_username, user_password } = req.body;
    try {  
        const loggedIn = await Users.getBy({ user_username: user_username });
        if (loggedIn && bcryptjs.compareSync(user_password, loggedIn.user_password)) {
            const token = buildToken(loggedIn);
            res.status(200).json({ message: "Welcome to our API", token });
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
    } catch(err) { next(err) }
})

function buildToken(user) {
    const payload = {
      id: user.user_id,
      username: user.user_username,
      role: user.user_role
    }
    const config = {
      expiresIn: '1d',
    }
    return jwt.sign(
      payload, JWT_SECRET, config
    )
}


module.exports = router;