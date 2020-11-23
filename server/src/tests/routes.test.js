const request = require('supertest');
const app = require('../server');
const connection = require('../database/index');

describe('Courses', () => {

  beforeEach( async() => {
    await connection.sync();//para conexão com o banco de dados
  });

  afterAll(async()=>{
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
      expect(response.statusCode).toEqual(200);
  });
  
  test('should show all courses', async () => {
    const res = await request(app)
      .get('/courses')
      
  });
});
