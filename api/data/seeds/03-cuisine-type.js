
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisine_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_type').insert([
        {cuisine_type: 'Mexican'},
        {cuisine_type: 'Italian'},
        {cuisine_type: 'American'},
        {cuisine_type: 'Barbecue'},
        {cuisine_type: 'Japanese'},
      ]);
    });
};