let courses = [];
let nextId = 1;

exports.getAll = () => courses;

exports.getById = (id) => courses.find((c) => c.id === id);

exports.create = ({ title, description }) => {
  const course = { id: nextId++, title, description: description || '' };
  courses.push(course);
  return course;
};

exports.update = (id, { title, description }) => {
  const course = courses.find((c) => c.id === id);
  if (!course) return null;
  if (title) course.title = title;
  if (description !== undefined) course.description = description;
  return course;
};

exports.remove = (id) => {
  const index = courses.findIndex((c) => c.id === id);
  if (index === -1) return false;
  courses.splice(index, 1);
  return true;
};