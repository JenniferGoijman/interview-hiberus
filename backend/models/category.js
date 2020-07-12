'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    timestamps: false
  });
  Category.associate = function(models) {
    Category.belongsToMany(models.Movie, {
      through: models.CategoryMovie,
    });
  };
  return Category;
};