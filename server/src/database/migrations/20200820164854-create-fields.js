'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	return queryInterface.createTable('Fields', {
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
		coordinates: {
			allowNull: false,
			type: Sequelize.GEOMETRY('POINT', 4326)
		},
		farm_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Farms',
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
    return queryInterface.dropTable('Fields')
  }
};
