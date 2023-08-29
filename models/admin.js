'use strict';
const {
  Model
} = require('sequelize');
const {hashedPass} = require("../helpers/password")

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    //create hooks before create for hashing password 
    hooks:{
      beforeCreate: (user, options) => {
        user.password = hashedPass(user.password)
      }
    },
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};