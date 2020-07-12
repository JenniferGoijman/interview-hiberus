'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryMovie = sequelize.define('CategoryMovie', {
    CategoryId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  CategoryMovie.associate = function(models) {
    // associations can be defined here
  };
  return CategoryMovie;
};