const Category = require('../models/Category');

// POST /api/categories
exports.createCategory = (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: 'Name is required' });
  }
  const category = Category.create({ name, description });
  res.status(201).json({ success: true, data: category });
};

// GET /api/categories
exports.getCategories = (req, res) => {
  const categories = Category.getAll();
  res.status(200).json({ success: true, count: categories.length, data: categories });
};

// GET /api/categories/:id
exports.getCategory = (req, res) => {
  const category = Category.getById(Number(req.params.id));
  if (!category) {
    return res.status(404).json({ success: false, message: 'Category not found' });
  }
  res.status(200).json({ success: true, data: category });
};

// PUT /api/categories/:id
exports.updateCategory = (req, res) => {
  const category = Category.update(Number(req.params.id), req.body);
  if (!category) {
    return res.status(404).json({ success: false, message: 'Category not found' });
  }
  res.status(200).json({ success: true, data: category });
};

// DELETE /api/categories/:id
exports.deleteCategory = (req, res) => {
  const deleted = Category.remove(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ success: false, message: 'Category not found' });
  }
  res.status(200).json({ success: true, message: 'Category deleted' });
};