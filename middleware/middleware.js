const jwt = require('jsonwebtoken');
const privateKey = "test_private_key_login";

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Access Denied. No Token Provided.' });
    }

    jwt.verify(token, privateKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Invalid Token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = { authenticateToken };
