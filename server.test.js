'use strict';
const supertest = require('supertest');
const server = require('./server.js');
const request = supertest(server.app);
describe('server test', () => {
  it('says Hello World!!', async () => {

    const response = await request.get('/data');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!!');

  });
});