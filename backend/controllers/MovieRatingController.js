const { MovieRating } = require('../models/index.js');

const MovieRatingController = {
    getRating(req, res) {
        MovieRating.findAll({
            where: {
                UserId: req.user.id,
                MovieId: req.params.MovieId
            }
        })
        .then(movieratings => res.send(movieratings))
    },
    insert(req, res) {       
        MovieRating.create({
            UserId: req.user.id,
            MovieId: req.body.MovieId,
            rating: req.body.rating
        })
        .then(order => res.send(order) );
    },
    update(req, res) {       
        MovieRating.update({
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(order => res.send(order) );
    }
}

module.exports = MovieRatingController;