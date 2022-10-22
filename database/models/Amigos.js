const config = require("../config/config");

module.exports = (sequelize, dataTypes) =>{

    let alias = 'amigos';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        
        persona_1:{
            type: dataTypes.INTEGER,
            foreinKey: true,
            allowNull: false
        },
        persona_2:{
            type: dataTypes.INTEGER,
            foreinKey: true,
            allowNull: false
        },

    };

    let config = {
        tableName: 'amigos',
        timestamps: false
    };

    const Amigos = sequelize.define(alias,cols,config);

    Amigos.associate = function(models){
        Amigos.belongsTo(models.usuarios, {
            as:'usuarios',
            foreignKey: 'persona_1'
        })

        Amigos.belongsTo(models.usuarios, {
            as:'usuarios',
            foreignKey: 'persona_2'
        })
    }
    return Amigos;
    
}
