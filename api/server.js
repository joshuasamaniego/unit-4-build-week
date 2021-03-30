const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const trucksRouter = require('./trucks/trucks-router');
const usersRouter = require('./users/users-router');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter);
server.use("/api/trucks", trucksRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "api is up" });
});

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
      custom: 'You hit the catch-all'
    });
});

module.exports = server
