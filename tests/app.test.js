const request = require('supertest');
const app = require('../lib/app');

describe('application routes', () => {
  it('returns index.html', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Max'));
      });
  });
  
  it('returns 404 with nothing behind /', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Not Found'));
      });
  });
});
