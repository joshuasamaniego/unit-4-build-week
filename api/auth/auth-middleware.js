
const checkValidCredentials = (req, res, next) => {
    const { user_username, user_role, user_password, user_email } = req.body;
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
    checkValidCredentials,
    loginCredentials
}