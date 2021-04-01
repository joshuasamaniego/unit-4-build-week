
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisine_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_type').insert([
        {cuisine_type: 'Mexican', truck_id: 2},
        {cuisine_type: 'Italian', truck_id: 3},
        {cuisine_type: 'American', truck_id: 1}
      ]);
    });
};