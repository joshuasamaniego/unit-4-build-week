
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('current_location').del()
    .then(function () {
      // Inserts seed entries
      return knex('current_location').insert([
        {current_lat: 40.014, current_long: -105.269, user_id: 2, truck_id: null},
        {current_lat: 40.027, current_long: -105.242, user_id: null, truck_id: 1},
        {current_lat: 40.019, current_long: -105.283, user_id: null, truck_id: 2},
        {current_lat: 40.004, current_long: -105.294, user_id: null, truck_id: 3},
      ]);
    });
};
