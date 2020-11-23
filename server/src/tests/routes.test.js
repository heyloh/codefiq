const request = require('supertest');
const app = require('../server');
const connection = require('../database/index');

describe('Courses', () => {

  beforeEach(async () => {
    await connection.sync();
  });

  afterAll(async () => {
    await connection.clear();
    await connection.close();
  });

  test('should create a new course', async () => {
    const response = await request(app)
      .post('/courses')
      .type('json')
      .send({
        name: 'Testando1'
      });

      expect(response.statusCode).toEqual(201);
  });
  
  test('should show all courses', async () => {
    const response = await request(app)
      .get('/courses');

      expect(response.statusCode).toEqual(200);
  });
});

describe('Users', () => {

  beforeEach(async () => {
    await connection.sync();
  });

  afterAll(async () => {
    await connection.clear();
    await connection.close();
  });

  test('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .type('json')
      .send({
        username: 'user',
        email: 'user@email.com',
        password: 'user1234'
      });

      expect(response.statusCode).toEqual(201);
  });
  
  test('should show all users', async () => {
    const response = await request(app)
      .get('/users');

      expect(response.statusCode).toEqual(200);
  });
});