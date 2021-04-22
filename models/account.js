'use strict';

const generateAccountKey = require('../utils/generateAccountKey')
const generateTodos = require('../utils/generateTodos')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.account.hasMany(models.todo)
      models.account.hasMany(models.pokemon)
    }
  };
  account.init({
    key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'account',
  });

  account.addHook('beforeCreate', (account, options) => {
    account.key = generateAccountKey()
  })

  account.addHook('afterCreate', (account, options) => {
    generateTodos(account)  
  })

  return account;
};