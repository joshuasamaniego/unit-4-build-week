
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu_item_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_item_ratings').insert([
        {menu_item_rating: 5, menu_item_id: 1, user_id: 2},
        {menu_item_rating: 4, menu_item_id: 2, user_id: 2},
        {menu_item_rating: 3, menu_item_id: 3, user_id: 2},
        {menu_item_rating: 5, menu_item_id: 4, user_id: 2},
        {menu_item_rating: 5, menu_item_id: 5, user_id: 2},
        {menu_item_rating: 4, menu_item_id: 6, user_id: 2},
        {menu_item_rating: 5, menu_item_id: 7, user_id: 2},
        {menu_item_rating: 4, menu_item_id: 8, user_id: 2},
        {menu_item_rating: 5, menu_item_id: 9, user_id: 2},
      ]);
    });
};
