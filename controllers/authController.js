const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'mysecretkey123';

// POST /api/auth/register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Name, email and password are required' });
  }
  if (User.findByEmail(email)) {
    return res.status(400).json({ success: false, message: 'Email already registered' });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = User.create({ name, email, password: hashed });
  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    user: { id: user.id, name: user.name, email: user.email },
  });
};

// POST /api/auth/login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }
  const user = User.findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });
  res.status(200).json({
    success: true,
    message: 'Login successful',
    token,
    user: { id: user.id, name: user.name, email: user.email },
  });
};