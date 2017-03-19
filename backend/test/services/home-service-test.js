const expect = require('chai').expect;

const homeService = require('../../src/services/home-service');

describe('home-service', function() {
  describe('getHome', function() {
    it('should return "Welcome to Ugram API"', function() {
      expect('Welcome to Ugram API').to.equal(homeService.getHome());
    });
  });
});
