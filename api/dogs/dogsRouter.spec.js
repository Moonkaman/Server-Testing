const request = require('supertest');

const server = require('../server');

const db = require('../../data/dbConfig');

describe('dogsRouter.js', () => {
  describe('GET /api/dogs', () => {
    it('Has 200 status code', async () => {
      const res = await request(server).get('/api/dogs');
      expect(res.status).toBe(200);
    });
    
    it('Returns JSON', async () => {
      const res = await request(server).get('/api/dogs');
      expect(res.type).toBe('application/json');
    });
  });

  describe('POST /api/dogs', () => {
    afterEach(async () => {
      await db('dogs').truncate();
    });

    it('Returns the new object', async () => {
      const res = await request(server).post('/api/dogs').send({name: 'buddy'});
      expect(res.body).toEqual({id: 1, name: 'buddy', age: 0, breed: 'Unknown'});
    });

    it('Returns json', async () => {
      const res = await request(server).post('/api/dogs').send({name: 'buddy'});
      expect(res.type).toBe('application/json');
    });
  });

  describe('UPDATE /api/dogs', () => {
    afterEach(async () => {
      await db('dogs').truncate();
    })

    it('Returns json', async () => {
      const res = await request(server).post('/api/dogs').send({name: 'buddy'});
      expect(res.type).toBe('application/json');
    });

    it('updates a dog', async () => {
      await request(server).post('/api/dogs').send({name: 'buddy'});
      const res = await request(server).put('/api/dogs/1').send({name: 'buddy', age: 2});

      expect(res.body.age).toBe(2);
    });

    it('Returns 404 if no dog is found', async () => {
      const res = await request(server).put('/api/dogs/1').send({name: 'buddy', age: 2});
      expect(res.status).toBe(404);
    });
  });

  describe('DELETE /api/dogs', () => {
    it('Returns 404 if no dog found', async () => {
      const res = await request(server).delete('/api/dogs/1');
      expect(res.status).toBe(404);
    });

    it('Returns 204 dog deleted', async () => {
      await request(server).post('/api/dogs').send({name: 'buddy'});
      const res = await request(server).delete('/api/dogs/1');
      expect(res.status).toBe(204);
    });
  });
});