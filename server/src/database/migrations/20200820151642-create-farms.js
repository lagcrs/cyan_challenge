'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Farms', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		code: {
			allowNull: false,
			type: Sequelize.STRING
		},
		name: {
			allowNull: false,
			type: Sequelize.STRING
		},
		harvest_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Harvests',
				key: 'id'
			}
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		  },
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},	
	})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Farms')
  }
};
