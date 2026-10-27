const express = require('express');
const router = express.Router();
const c = require('../controllers/categoryController');

router.route('/').get(c.getCategories).post(c.createCategory);
router.route('/:id').get(c.getCategory).put(c.updateCategory).delete(c.deleteCategory);

module.exports = router;