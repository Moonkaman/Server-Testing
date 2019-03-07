const db = require('../dbConfig');

module.exports = {
  get,
  add,
  remove,
  update
}

function get(id) {
  if(id) {
    return db('dogs').where({id}).first();
  } else {
    return db('dogs');
  }
}

function add(dog) {
  return db('dogs').insert(dog)
    .then(id => db('dogs').where({id: id[0]}).first());
}

function remove(id) {
  return db('dogs').where({id}).del();
}

function update(id, dog) {
  return db('dogs').where({id}).update(dog)
    .then(count => {
      if(count > 0) {
        return get(id);
      } else {
        return null;
      }
    })
    .catch(err => err);
}