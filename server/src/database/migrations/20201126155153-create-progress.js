'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('progress', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primarykey: true,
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primarykey: true,
        references: {         //  1:n
          model: 'courses',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primarykey: true,
        references: {         //  1:n
          model: 'users',
          key: 'id'
        }
      },
      progress: {
        type: Sequelize.JSON,
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
    .then(() => {
      return queryInterface.addConstraint('progress', {
        fields: ['course_id', 'user_id', 'id'],
        type: 'primary key',
        name: 'progress_pkey'
      });
    }) 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('progress');
  }
};