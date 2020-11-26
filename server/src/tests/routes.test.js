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

describe('Subjects', () => {

  beforeEach(async () => {
    await connection.sync();
  });

  afterAll(async () => {
    await connection.clear();
    await connection.close();
  });

  test('should create a new subject', async () => {
    const response = await request(app)
      .post('/subjects')
      .type('json')
      .send({
        name: 'Subject',
        course_id: 1
      });

      expect(response.statusCode).toEqual(201);
  });
  
  test('should show all subjects', async () => {
    const response = await request(app)
      .get('/subjects');

      expect(response.statusCode).toEqual(200);
  });
});

describe('Videos', () => {

  beforeEach(async () => {
    await connection.sync();
  });

  afterAll(async () => {
    await connection.clear();
    await connection.close();
  });

  test('should create a new video', async () => {
    const response = await request(app)
      .post('/videos')
      .type('json')
      .send({
        subject_id: 1,
        url: "12345678912"
      });

      expect(response.statusCode).toEqual(201);
  });
  
  test('should show all videos', async () => {
    const response = await request(app)
      .get('/videos');

      expect(response.statusCode).toEqual(200);
  });
});

describe('Exercises', () => {

  beforeEach(async () => {
    await connection.sync();
  });

  afterAll(async () => {
    await connection.clear();
    await connection.close();
  });

  test('should create a new exercise', async () => {
    const response = await request(app)
      .post('/exercises')
      .type('json')
      .send({
        subject_id: 1,
        content: {
          question: "Quem escreve o algoritmo?",
          answers: [
            ["O programador", true],
            "O usuário comum",
            "A própria máquina, usando de base o código",
            "O algoritmo não é escrito",
          ]
        }
      });

      expect(response.statusCode).toEqual(201);
  });
  
  test('should show all exercises', async () => {
    const response = await request(app)
      .get('/exercises');

      expect(response.statusCode).toEqual(200);
  });
});

describe('Progress', () => {

  beforeEach(async () => {
    await connection.sync();
  });

  afterAll(async () => {
    await connection.clear();
    await connection.close();
  });

  test('should create a new progress', async () => {
    const response = await request(app)
      .post('/progress')
      .send({
        progress: {"example": "example"},
        user_id: 5,
        course_id: 9,   
      });

      expect(response.statusCode).toEqual(201);
  });

  test('should show all progress', async () => {
    const response = await request(app)
      .get('/progress');

      expect(response.statusCode).toEqual(200);
  });
}); 