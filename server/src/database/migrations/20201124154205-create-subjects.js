'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('subjects', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primarykey: true,
        allowNull: false,
        unique: true,
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primarykey: true,
        references: {         //  1:n
          model: 'courses',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('subjects');
  }
};
