const { readFile } = require('../lib/read-file');

describe('dealing with file', () => {
  it('read', done => {
    readFile('./public/index.html', (err, content) => {
      expect(err).toBeFalsy();
      expect(content).toEqual(expect.any(String)); 
      done();
    });
  });
});
