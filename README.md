# Course API

REST API built with Express.js using Modular MVC architecture.

## Modules
- Auth: POST /api/auth/register, POST /api/auth/login
- Categories: POST, GET, GET /:id, PUT /:id, DELETE /:id on /api/categories
- Courses: POST, GET, GET /:id, PUT /:id, DELETE /:id on /api/courses

## Run
npm install
node server.js

Server runs on http://localhost:5000. Data is stored in memory.
