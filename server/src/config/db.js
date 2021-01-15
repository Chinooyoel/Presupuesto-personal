const mongoose = require('mongoose')

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/presupuesto_personal', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
        );
        console.log("Base de datos Online")

    } catch (error) {
        console.log(error);
    }
}


module.exports = conectarDB;