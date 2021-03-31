const Users = require('../users/users-model');
const server = require('../server');
const request = require('supertest');
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
afterAll(async () => {
  await db.destroy();
});
test("sanity check", () => {
  expect(true).toBe(true);
});

describe('auth-router endpoints', () => {
  describe('register endpoint', () => {
    it('creates a new user', async () => {
      await request(server).post('/api/auth/register')
        .send({ user_username: 'tester', user_role: 1, user_password: '1234', user_email: 'test@test.com' })
      const user = await db('users').where('user_username', 'tester').first()
      expect(user).toMatchObject({ user_username: 'tester', user_role: 1,user_password: '1234', user_email: 'test@test.com' })
    })
  })
  describe('login endpoint', () => {
  })
  describe('logout endpoint', () => {
  })
})