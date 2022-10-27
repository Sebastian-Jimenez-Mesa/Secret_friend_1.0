const config = require("../config/config");

module.exports = (sequelize, dataTypes) =>{

    let alias = 'grupos';

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
        
    };

    let config = {
        tableName: 'grupos',
        timestamps: false
    };

    const Grupos = sequelize.define(alias,cols,config);

    Grupos.associate = function(models){
        Grupos.hasMany(models.usuarios, {
            as:'usuarios',
            foreignKey: 'id_grupo'
        })

        
    }

    return Grupos;
    
}
