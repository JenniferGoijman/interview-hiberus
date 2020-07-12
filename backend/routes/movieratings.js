const router = require('express').Router();
const MovieRatingController = require('../controllers/MovieRatingController');
const {authentication} = require('../middleware/authentication.js')

router.get('/:MovieId', authentication, MovieRatingController.getRating);
router.post('/', authentication, MovieRatingController.insert);
router.put('/:id', authentication, MovieRatingController.update);

module.exports = router;