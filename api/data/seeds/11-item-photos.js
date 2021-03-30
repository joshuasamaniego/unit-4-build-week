
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('item_photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('item_photos').insert([
        {item_photo_img: 'https://images.unsplash.com/photo-1603876468126-3f1fbc48de56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80', menu_item_id: 1},
        {item_photo_img: 'https://images.pexels.com/photos/2261197/pexels-photo-2261197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', menu_item_id: 2},
        {item_photo_img: 'https://images.pexels.com/photos/4676423/pexels-photo-4676423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', menu_item_id: 3},
        {item_photo_img: 'https://images.pexels.com/photos/3264572/pexels-photo-3264572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', menu_item_id: 4},
        {item_photo_img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', menu_item_id: 5},
        {item_photo_img: 'https://images.unsplash.com/photo-1611942766601-12d3aedc6c2f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpcHMlMjBhbmQlMjBzYWxzYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', menu_item_id: 6},
        {item_photo_img: 'https://images.unsplash.com/photo-1607290817806-e93c813ff329?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbmFsJTIwcGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', menu_item_id: 7},
        {item_photo_img: 'https://images.unsplash.com/photo-1591154405747-5ee97d563988?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNwYWdoZXR0aXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', menu_item_id: 8},
        {item_photo_img: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', menu_item_id: 9},
      ]);
    });
};
