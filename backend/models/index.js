'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = [
  require('../models/user.js')(sequelize, Sequelize),
  require('../models/token.js')(sequelize, Sequelize),
  require('../models/movie.js')(sequelize, Sequelize),
  require('../models/category.js')(sequelize, Sequelize),
  require('../models/categorymovie.js')(sequelize, Sequelize),
  require('../models/movierating.js')(sequelize, Sequelize),
]

models.forEach(model => {
  db[model.name] = model
})

models.forEach(model => {
  if (db[model.name].associate) {
    console.log('entered', model.name)
    db[model.name].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db