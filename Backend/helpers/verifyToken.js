const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = async (request, response, next) => {
    const token = request.header('auth-token');
    if (!token) {
        response.status(401).send({ error: "Authentication required" })
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecomm')
            request.user = data.user;
            next();
        } catch (error) {
            response.status(401).send({ error: "Authenticate using valid token" })
        }
    }
}

module.exports = { verifyToken };