'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Harvests', {
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
		start: {
			allowNull: false,
			type: Sequelize.DATEONLY
		},
		end: {
			allowNull: false,
			type: Sequelize.DATEONLY
		},
		mill_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Mills',
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
	return queryInterface.dropTable('Harvests')
  }
};
