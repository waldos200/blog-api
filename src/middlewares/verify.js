const JWT = require('jsonwebtoken');
const User = require('../models/users');
const SECRET_KEY = 'misecreto';

module.exports = async(req, res, next) => {
    const AUTH = req.get('Authorization');
    try {
        if(AUTH){
            const token = AUTH.replace('JWT ', "");
            const payload = JWT.verify(token, SECRET_KEY);
            if (payload){
                const user = new User();
                const { id } = payload;
                const [userFound] = await user.findOne(id);
                if (!userFound) throw new Error('Usuario no encontrado')
                req.user = userFound; // Iniciando la sesion en el backend, lo puede ocupar en otro middleware o en el controlador 
                next();
            }
        } else {
            throw new Error("Header no fue enviado");
        }
    } catch (error) {
        return res.status(400).json({messege: error.message});
    }
}