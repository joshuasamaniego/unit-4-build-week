const router = require('express').Router();
const Users = require('./users-model');
const { checkUserId, checkUserPayload } = require('./users-middleware');

router.get('/', async (req, res, next) => {
    try {
        const allUsers = await Users.getAll();
        res.json(allUsers);
    } catch(err) { next(err) }
})

router.get('/:id', checkUserId, async (req, res, next) => {
    try {
        res.json(req.userAtId);
    } catch(err) { next(err) }
})

router.post('/', checkUserPayload, async (req, res, next) => {
    try {
        const newUser = await Users.addUser(req.body)
        res.status(201).json(newUser);
    } catch(err) { next({ err }) }
})

module.exports = router;