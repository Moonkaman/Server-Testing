
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {name: 'Shadow', age: 1, breed: 'Black Lab'},
        {name: 'Linkin', age: 2, breed: 'Husky'},
        {name: 'Chaloopa', age: 10, breed: 'Chihuahua Lasa Opso'},
        {name: 'Pinky', age: 9, breed: 'Lasa Opso'}
      ]);
    });
};
