'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    poster_path: DataTypes.STRING,
    vote_average: DataTypes.INTEGER,
    title: DataTypes.STRING,
    release_date: DataTypes.DATE,
    original_title: DataTypes.STRING,
    backdrop_path: DataTypes.STRING,
    overview: DataTypes.STRING
  }, {});
  Movie.associate = function(models) {
    Movie.hasMany(models.Category);
  };
  return Movie;
};