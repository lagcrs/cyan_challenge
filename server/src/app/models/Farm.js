'use strict'

module.exports = (sequelize, DataTypes) => {
    const Farm = sequelize.define('Farm', {
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        harvest_id: {
            type: DataTypes.INTEGER,
            references: 'Harvests',
            referencesKey: 'id'
        }
    });

    Farm.associate = function(models) {
        Farm.belongsTo(models.Harvest, {
            foreignKey: 'harvest_id'
        })
    };

    return Farm;
}