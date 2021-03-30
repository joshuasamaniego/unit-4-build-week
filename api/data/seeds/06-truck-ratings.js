
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('truck_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('truck_ratings').insert([
        {rating: 4, user_id: 2, truck_id: 3},
        {rating: 3, user_id: 2, truck_id: 1},
        {rating: 5, user_id: 2, truck_id: 2},
      ]);
    });
};
