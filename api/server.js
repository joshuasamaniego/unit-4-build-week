const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const trucksRouter = require('./trucks/trucks-router');
const { logger } = require('./server-middleware');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth", logger, authRouter);
server.use("/api/trucks", logger, trucksRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "api is up" });
});

module.exports = server
