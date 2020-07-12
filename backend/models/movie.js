'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    poster_path: DataTypes.STRING,
    vote_average: DataTypes.INTEGER,
    title: DataTypes.STRING,
    release_date: DataTypes.DATE,
    original_title: DataTypes.STRING,
    backdrop_path: DataTypes.STRING,
    overview: DataTypes.STRING
  }, {
    timestamps: false
  });

  Movie.associate = function(models) {
    Movie.belongsToMany(models.Category, {
      through: models.CategoryMovie,
    });
  };
  return Movie;
};