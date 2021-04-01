
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {truck_name: 'Freddies Hot Dogs', truck_img: 'https://images.pexels.com/photos/2262177/pexels-photo-2262177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', user_id: 1},
        {truck_name: 'Azteca', truck_img: 'https://images.pexels.com/photos/1264937/pexels-photo-1264937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', user_id: 3},
        {truck_name: 'Fresh Pizza and Spaghetti', truck_img: 'https://images.unsplash.com/photo-1604624483037-489d287ae9fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1096&q=80', user_id: 1},
      ]);
    });
};