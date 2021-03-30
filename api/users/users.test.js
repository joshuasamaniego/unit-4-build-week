const Users = require('./users-model');
const server = require('../server');
const request = require('supertest');
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});
test("sanity check", () => {
  expect(true).toBe(true);
});

// User Model Functions
describe('users-model functions', () => {
  describe('getAll() function', () => {
    let users;
    beforeEach( async () => {
      users = await Users.getAll();
    })
    it('returns all users', async () => {
      expect(users).toHaveLength(3);
    })
    it('retrieves users with {user_id, user_username, user_role, user_email, user_password}', async () => {
      expect(users[0]).toMatchObject({ user_email: 'richard@dick.com', user_id: 1, user_password: "1234", user_role: 1, user_username: "DickRichards"});
    })
  })
  describe('getById() function', () => {
    it('returns a user by given id', async () => {
      const userById = await Users.getById(1)
      expect(userById).toMatchObject({ user_email: 'richard@dick.com', user_id: 1, user_password: "1234", user_role: 1, user_username: "DickRichards"});
    })
  })
  describe('addUser() function', () => {
    it('can insert a user into the db', async () => {
      const newUserObj =  { user_email: 'newuser@gmail.com', user_password: "1234", user_role: 1, user_username: "newUser"}
      const newUser = await Users.addUser(newUserObj);
      expect(await db('users')).toHaveLength(4);
      expect(newUser).toMatchObject(newUserObj);
    })
  })
})

// User Router Endpoints
describe('User Router Endpoints', () => {
  describe('[GET] /api/users/:id', () => {
    let res;
    beforeEach( async () => {
      res = await request(server).get('/api/users/1')
    })
    it('gets user at specified id', async () => {
        expect(res.body).toMatchObject({user_email: "richard@dick.com", user_id: 1, user_password: "1234", user_role: 1, user_username: "DickRichards"})
    })
    it('responds with a 200 OK status', async () => {
        expect(res.status).toBe(200);
    })
  })
  describe('[POST] /api/users/', () => {
    let res;
    beforeEach( async () => {
      res = await request(server)
        .post('/api/users/')
        .send({user_email: "newuser@gmail.com", user_password: "1234", user_role: 1, user_username: "newUser"})
    })
    it('posts a new user to the db', async () => {
        expect(res.body).toMatchObject({user_email: "newuser@gmail.com", user_password: "1234", user_role: 1, user_username: "newUser"})
    })
    it('responds with a 201 OK status', async () => {
        expect(res.status).toBe(201);
    })
  })
})

