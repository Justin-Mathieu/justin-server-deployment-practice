const { request } = require('express');
const validator = require('../middleware/validator.js');



describe('validator middleware test', () => {
  it('checks for query', () => {
    const response = request.get('/person');

    expect(response.status).toBe(500);
  });

});
