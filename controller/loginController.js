const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userService = require('../service/userService');
const privateKey = 'test_private_key_login';

const generateToken = (payload) => {
    return jwt.sign(payload, privateKey, { expiresIn: '1h' });
};

const login = (req, res) => {
    const { email, password } = req.body;

    userService.findOne(email, (err, user) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }

        if (!user) {
            return res.status(404).json({ success: false, message: 'User Not Found' });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(400).json({ success: false, message: 'Incorrect Password' });
            }

            const token = generateToken({ email: user.email, userId: user.id });
            res.status(200).json({ success: true, message: 'Login Successful', token });
        });
    });
};

module.exports = { login };
