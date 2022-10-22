const config = require("../config/config");

module.exports = (sequelize, dataTypes) =>{

    let alias = 'usuarios';

    let cols = {
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

    };

    let config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const Usuarios = sequelize.define(alias,cols,config);

    Usuarios.associate = function(models){
        Usuarios.hasMany(models.grupos, {
            as:'grupos',
            foreignKey: 'id_grupo'
        })

        Usuarios.belongsTo(models.roles, {
            as:'roles',
            foreignKey: 'id_rol'
        })

        Usuarios.hasMany(models.amigos, {
            as:'amigos',
            foreignKey: 'persona_1'
        })

        Usuarios.hasMany(models.amigos, {
            as:'amigos',
            foreignKey: 'persona_2'
        })


    }

    return Usuarios;

}
