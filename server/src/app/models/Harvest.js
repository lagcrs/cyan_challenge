'use strict'

module.exports = (sequelize, DataTypes) => {

    const Harvest = sequelize.define('Harvest', {
      code: DataTypes.STRING,
      start: DataTypes.DATEONLY,
      end: DataTypes.DATEONLY,
      mill_id: {
        type: DataTypes.INTEGER,
        references: 'Mills',
        referencesKey: 'id'
      }
	});
	
	Harvest.associate = function(models) {
		Harvest.belongsTo(models.Mill, {
			foreignKey: 'mill_id'
		});
	
		Harvest.hasMany(models.Farm, {
			foreignKey: 'harvest_id'
		})
	};

  return Harvest;
}