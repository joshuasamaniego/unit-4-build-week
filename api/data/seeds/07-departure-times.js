
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('departure_times').del()
    .then(function () {
      // Inserts seed entries
      return knex('departure_times').insert([
        {closing_time: "10PM", day_of_the_week: 'Monday', truck_id: 1},
        {closing_time: "10PM", day_of_the_week: 'Tuesday', truck_id: 1},
        {closing_time: "10PM", day_of_the_week: 'Wednesday', truck_id: 1},
        {closing_time: "10PM", day_of_the_week: 'Thursday', truck_id: 1},
        {closing_time: "10PM", day_of_the_week: 'Friday', truck_id: 1},
        {closing_time: "10PM", day_of_the_week: 'Saturday', truck_id: 1},
        {closing_time: "10PM", day_of_the_week: 'Sunday', truck_id: 1},
        {closing_time: "9PM", day_of_the_week: 'Monday', truck_id: 2},
        {closing_time: "9PM", day_of_the_week: 'Tuesday', truck_id: 2},
        {closing_time: "9PM", day_of_the_week: 'Wednesday', truck_id: 2},
        {closing_time: "9PM", day_of_the_week: 'Thursday', truck_id: 2},
        {closing_time: "9PM", day_of_the_week: 'Friday', truck_id: 2},
        {closing_time: "9PM", day_of_the_week: 'Saturday', truck_id: 2},
        {closing_time: "9PM", day_of_the_week: 'Sunday', truck_id: 2},
        {closing_time: "8PM", day_of_the_week: 'Monday', truck_id: 3},
        {closing_time: "8PM", day_of_the_week: 'Tuesday', truck_id: 3},
        {closing_time: "8PM", day_of_the_week: 'Wednesday', truck_id: 3},
        {closing_time: "8PM", day_of_the_week: 'Thursday', truck_id: 3},
        {closing_time: "8PM", day_of_the_week: 'Friday', truck_id: 3},
        {closing_time: "8PM", day_of_the_week: 'Saturday', truck_id: 3},
        {closing_time: "8PM", day_of_the_week: 'Sunday', truck_id: 3},
      ]);
    });
};
