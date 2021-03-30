
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_role: 1, user_username: "DickRichards", user_password: "1234", user_email: "richard@dick.com"},
        {user_role: 2, user_username: "RichardsDick", user_password: "1234", user_email: "dick@richard.com"},
        {user_role: 1, user_username: "Example", user_password: "1234", user_email: "example@example.com"},
      ]);
    });
};