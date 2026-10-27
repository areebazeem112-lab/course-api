let categories = [];
let nextId = 1;

exports.getAll = () => categories;

exports.getById = (id) => categories.find((c) => c.id === id);

exports.create = ({ name, description }) => {
  const category = { id: nextId++, name, description: description || '' };
  categories.push(category);
  return category;
};

exports.update = (id, { name, description }) => {
  const category = categories.find((c) => c.id === id);
  if (!category) return null;
  if (name) category.name = name;
  if (description !== undefined) category.description = description;
  return category;
};

exports.remove = (id) => {
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) return false;
  categories.splice(index, 1);
  return true;
};