const config = require("../config/config");

module.exports = (sequelize, dataTypes) =>{

    let alias = 'roles';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        
        rol:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        
    };

    let config = {
        tableName: 'roles',
        timestamps: false
    };

    const Rol = sequelize.define(alias,cols,config);

    
    Rol.associate = function(models){
        Rol.hasMany(models.usuarios, {
            as:'usuarios',
            foreignKey: 'id_rol'
        })

        
    }


    return Rol;
    
}
