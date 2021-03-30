
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_items').insert([
        {item_name: 'Freddies Signature', item_description: 'The originial weiner that made us famous', item_price: 6, truck_id: 1},
        {item_name: 'Chili Dog', item_description: 'The best chili draped over the best floppy dogs around', item_price: 8, truck_id: 1},
        {item_name: 'Boring Dog', item_description: 'The plainest hot dog for all the plain janes out there', item_price: 4, truck_id: 1},
        {item_name: 'Tacos', item_description: 'Corn tortilla, your choice of meat with all the salsas. (2 Tacos per serving)', item_price: 4, truck_id: 2},
        {item_name: 'Kitchen Sink Burrito', item_description: 'Everything but the kitchen sink wrapped in a flour tortilla', item_price: 9, truck_id: 2},
        {item_name: 'Chips and Salsa', item_description: 'Chips made for dipping served with salsa made for mouth breathers', item_price: 3, truck_id: 2},
        {item_name: 'Fresh Pizza', item_description: 'The freshest pizza around, starting at 5 dollars for a personal. Add 50 cents per topping.', item_price: 5, truck_id: 3},
        {item_name: 'Fresh Spaghetti', item_description: 'The freshest spahetti around, served with a mini baguette of garlic bread', item_price: 8, truck_id: 3},
        {item_name: 'Fresh Garlic Bread', item_description: 'For all the bread, butter and garlic lovers out there! One of our signature side dishes', item_price: 3, truck_id: 3},
      ]);
    });
};
