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
        console.log(req)
        MovieRating.create({
            //UserId: req.user.id,
            UserId: req.body.UserId,
            MovieId: req.body.MovieId,
            rating: req.body.rating
        })
        .then(order => res.send(order) );
    }
}

module.exports = MovieRatingController;