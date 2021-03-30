const Users = require('./users-model');

const checkUserId = async (req, res, next) => {
    try {
      const userAtId = await Users.getById(req.params.id);
      if(userAtId) {
          req.userAtId = userAtId;
          next();
        } else {
        res.status(404).json({ message: `User with id ${req.params.id} is not in DB` })
        }
    } catch(err) { next(err) }
  }

const checkUserPayload = (req, res, next) => {
    const {user_role, user_username, user_password, user_email} = req.body;
    if(!user_role) {
        res.status(400).json({ message: "User's role is missing" })
    } else if(!user_username) {
        res.status(400).json({ message: "Username is missing" })
    } else if(!user_password) {
        res.status(400).json({ message: "User's password is missing" })
    } else if(!user_email) {
        res.status(400).json({ message: "User's email is missing" })
    } else {
        next();
    }
}

module.exports = {
    checkUserId,
    checkUserPayload
}