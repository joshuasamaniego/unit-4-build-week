const db = require('../data/db-config');

function getAll() {
  return db('users');
}

function getBy(filter) {
  return db('users').where(filter).first();
}

function getById(user_id) {
  return db('users').where('user_id', user_id).first();
}

async function addUser(user) { 
  const [id] = await db('users').returning('user_id').insert(user);
  return getById(id);
}

module.exports = {
    getAll,
    getBy,
    getById,
    addUser
};