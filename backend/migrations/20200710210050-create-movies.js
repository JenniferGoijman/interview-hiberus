'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        type: Sequelize.INTEGER
      },
      poster_path: {
        type: Sequelize.STRING
      },
      vote_average: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
      },
      original_title: {
        type: Sequelize.STRING
      },
      backdrop_path: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};