const Course = require('../models/Course');

// POST /api/courses
exports.createCourse = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Title is required' });
  }
  const course = Course.create({ title, description });
  res.status(201).json({ success: true, data: course });
};

// GET /api/courses
exports.getCourses = (req, res) => {
  const courses = Course.getAll();
  res.status(200).json({ success: true, count: courses.length, data: courses });
};

// GET /api/courses/:id
exports.getCourse = (req, res) => {
  const course = Course.getById(Number(req.params.id));
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }
  res.status(200).json({ success: true, data: course });
};

// PUT /api/courses/:id
exports.updateCourse = (req, res) => {
  const course = Course.update(Number(req.params.id), req.body);
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }
  res.status(200).json({ success: true, data: course });
};

// DELETE /api/courses/:id
exports.deleteCourse = (req, res) => {
  const deleted = Course.remove(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }
  res.status(200).json({ success: true, message: 'Course deleted' });
};