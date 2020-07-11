const { User, Token } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret, API_URL, FRONT_URL } = require('../config/config.json')[env];

const UserController = {
    async register(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 9);

            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password,
            });
            res.status(201).send({
                user,
                message: 'User registered succesfully'
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'There was a problem trying to register the user'
            });
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Incorrect email or password.'
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Incorrect email or password.'
                })
            }
            const token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token, UserId: user.id });
            res.send({
                message: 'Welcome ' + user.username,
                user,
                token
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'There was a problem trying to log in.'
            });
        }
    },
    getInfo(req, res) {
        res.send(req.user);
    }
}
module.exports = UserController;