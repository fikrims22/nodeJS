'use strict';
module.exports = function(sequelize, DataTypes) {
  var profile = sequelize.define('profile', {
    nama: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return profile;
};