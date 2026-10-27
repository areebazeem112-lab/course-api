let users = [];
let nextId = 1;

exports.findByEmail = (email) => users.find((u) => u.email === email);

exports.create = ({ name, email, password }) => {
  const user = { id: nextId++, name, email, password };
  users.push(user);
  return user;
};