const verifyAuthenticated = async (request, response, next) => {
    const token = request.header('auth-token');
    if(!token) {
        return next();
    }
}

module.exports = { verifyAuthenticated };