'use strict';
module.exports = function(sequelize, DataTypes) {
  let Bcrypt = require('bcrypt');
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: {
      type : DataTypes.STRING,
      set : function(value) {
        var password = Bcrypt.hashSync(value, Bcrypt.genSaltSync(10));
        this.setDataValue('password', password);
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};