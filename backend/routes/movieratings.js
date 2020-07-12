const router = require('express').Router();
const MovieRatingController = require('../controllers/MovieRatingController');

router.get('/:MovieId', MovieRatingController.getRating);
router.post('/', MovieRatingController.insert);

module.exports = router;