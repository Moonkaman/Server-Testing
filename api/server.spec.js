const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
  describe('GET /', () => {
    it('Has status code 200', async () => {
      const res = await request(server).get('/');  
      expect(res.status).toBe(200);
    });

    it('Returns JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });

    it('Returns correct message', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({message: 'It working so far son'})
    });
  });
});