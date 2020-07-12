const { Movie, Category } = require('../models/index.js');

const MovieController = {
    getAll(req, res) {
        Movie.findAll({
            include: [Category],
        })
        .then(movies => res.send(movies))
    }
}

module.exports = MovieController;