'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryMovie = sequelize.define('CategoryMovie', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {});
  CategoryMovie.associate = function(models) {
    // associations can be defined here
  };
  return CategoryMovie;
};