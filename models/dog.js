'use strict';
module.exports = (sequelize, DataTypes) => {
  const dog = sequelize.define('dog', {
    breed: DataTypes.STRING,
    size: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  dog.associate = function(models) {
    // associations can be defined here
  };
  return dog;
};