const express = require('express');
const router = express.Router();
const c = require('../controllers/courseController');

router.route('/').get(c.getCourses).post(c.createCourse);
router.route('/:id').get(c.getCourse).put(c.updateCourse).delete(c.deleteCourse);

module.exports = router;