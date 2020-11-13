'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { 
    return queryInterface.createTable('courses', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primarykey: true,
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

    return queryInterface.dropTable('courses');
  }
};
