'use strict'

module.exports = (sequelize, DataTypes) => {
    const Field = sequelize.define('Field', {
        code: DataTypes.STRING,
        coordinates: DataTypes.GEOMETRY('POINT', 4326),
        farm_id: {
            type: DataTypes.INTEGER,
            references: 'Farms',
            referencesKey: 'id'
        }
    });

    Field.associate = function(models){
        Field.belongsTo(models.Farm, {
            foreignKey: 'farm_id'
        });
    };

    return Field;
}