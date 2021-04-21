'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('todos', 'accountId', Sequelize.DataTypes.INTEGER)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('todos', 'accountId')
  }
};
