
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorite_trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite_trucks').insert([
        {user_id: 2, truck_id: 2},
        {user_id: 2, truck_id: 3}
      ]);
    });
};
