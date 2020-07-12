const { Movie, Category } = require('../models/index.js');

const CategoryController = {
    getAll(req, res) {
        Category.findAll({
            include: [Movie],
        })
        .then(categories => res.send(categories))
    }
}

module.exports = CategoryController;