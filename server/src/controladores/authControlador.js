const jwt = require('jsonwebtoken');
const Usuario = require('../modelos/Usuario');
const bcrypt = require('bcrypt');

exports.validarCredenciales = async ( req, res ) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({email: email});

        //comprobamos si existe el usuario
        if(!usuario) {
            return res.status(400).json({
                msg: "Credenciadas invalidas email"
            })
        }
        
        //validamos la password
        const passwordCorrecta = await bcrypt.compare(password, usuario.password);

        if(!passwordCorrecta){
            return res.status(400).json({
                msg: "Credenciadas invalidas password"
            })
        }

        //creamos el token
        const token = jwt.sign({ 
            _id: usuario._id,
        }, "123", { expiresIn: '24h'});

        //retornamos el token
        res.json({
            token
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            msg: "Error interno. Intente mas tarde"
        })
    }

}