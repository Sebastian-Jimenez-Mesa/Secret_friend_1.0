const db = require("../database/models");
const Op = db.Sequelize.Op;

const usersController = {
    form:(req,res) =>{
        db.grupos.findAll()
            .then(function(grupos){
                return res.render("registro", {grupos:grupos})
            })
    },

    register: (req, res) => {

        db.grupos.findAll({
            include: {
                all: true,
                nested: true
            }
        })
        .then(()=>{

            db.usuarios.create({
                nombre: req.body.nombre,
                apellidos: req.body.apellidos,
                sexo: req.body.genero,
                id_grupo: req.body.grupo,
                gustos: req.body.gustos,
                disgustos: req.body.disgustos,
                alergias: req.body.alergias,
        })

        })

        //res.send("usuario registrado")
        res.redirect('/users/formularioJugadores')
    },
    jugadores: (req, res) => {

        db.grupos.findAll({
            include: {
                all: true,
                nested: true
            }
        }).then(function(grupos){
            res.render('formularioJugadores',{grupos})
        })
}

}

module.exports = usersController;