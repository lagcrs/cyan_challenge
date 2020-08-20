'use strict'

module.exports = (sequelize, DataTypes) => {

    const Mill = sequelize.define('Mill', {
      name: DataTypes.STRING,
    });

    Mill.associate = function(models) {
        Mill.hasMany(models.Harvest, {
            foreignKey: 'mill_id'
        })
    };
  
    return Mill;
}