'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieRating = sequelize.define('MovieRating', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    rating: DataTypes.DOUBLE
  }, {});
  MovieRating.associate = function(models) {
    // associations can be defined here
  };
  return MovieRating;
};