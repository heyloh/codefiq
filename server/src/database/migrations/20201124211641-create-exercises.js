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
      subject_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primarykey: true,
        references: {         //  1:n
          model: 'subjects',
          key: 'id'
        }
      },
      content: {
        type: Sequelize.JSON,
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

  down: async (queryInterface) => {
    return queryInterface.dropTable('subjects');
  }
};
