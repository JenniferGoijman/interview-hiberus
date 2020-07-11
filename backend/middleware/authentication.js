const jwt = require('jsonwebtoken');
const { User, Token } = require('../models/index');
const env = process.env.NODE_ENV || 'development';
const {  jwt_secret } = require('../config/config.json')[env];
const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization; 
        const payload = jwt.verify(token, jwt_secret);
        const user = await User.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where:{
                token:token
            }
        })
        if(!user || !tokenFound){
            res.status(401).send({
                message: 'No estas autorizado',
                error
            })
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({
            message: 'No estas autorizado',
            error
        })
    }
}
module.exports = {
    authentication
};