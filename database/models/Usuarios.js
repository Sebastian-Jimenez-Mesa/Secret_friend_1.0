const { Sequelize, dataTypes } = require("sequelize");
const sequelize = require("../connection");
const Usuarios = sequelize.define(
    "usuarios",



    {
       id:{
           type: dataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
       },
       nombre:{
           type: dataTypes.STRING(50),
           allowNull: false
       },
       apellidos:{
           type: dataTypes.STRING(50),
           allowNull: false
       },
       sexo:{
           type: dataTypes.STRING(10),
           allowNull: false
       },
       gustos:{
           type: dataTypes.STRING(250),
           allowNull: false
       },
       disgustos:{
           type: dataTypes.STRING(250),
           allowNull: false
       },
       alergias:{
           type: dataTypes.STRING(250),
           allowNull: false
       },
       id_grupo:{
           type: dataTypes.INTEGER,
           foreinKey: true,
           allowNull: false
       },
       id_rol:{
           type: dataTypes.INTEGER,
           foreinKey: true,
           allowNull: false
       },

       },
       {
       timestamps: false,
       }
          
    );
        
    


module.exports = Usuarios;