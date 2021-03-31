const Users = require('../users/users-model');
const bcryptjs = require('bcryptjs');


const checkIfLoggedIn = async (req, res, next) => {
    const { user_username, user_password } = req.body;
    try {  
        const loggedIn = await Users.getBy({ user_username: user_username });
        if (loggedIn && bcryptjs.compareSync(user_password, loggedIn.user_password)) {
            next();
          } else {
            res.status(401).json({ message: "You are not logged in" });
          }
    } catch(err) { next(err) }
}

const loginCredentials = (req, res, next) => {
    const { user_username, user_password } = req.body;
    if(!user_username) {
        res.status(400).json({ message: "Username is missing" })
    } else if(!user_password) {
        res.status(400).json({ message: "User's password is missing" })
    } else {
        next();
    }
}

module.exports = {
    checkIfLoggedIn,
    loginCredentials
}