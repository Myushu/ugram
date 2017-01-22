const expect = require('chai').expect;

const SampleService = require('../../src/services/sample-service');

describe('sample-service', function() {
  describe('getSample', function() {
    it('should return "This is a sample"', function() {
      expect('This is a sample').to.equal(SampleService.getSample());
    });
  });

  describe('getParametrizedSample', function() {
    it('should return the value passed in parameters', function() {
      const param = 'sample';
      expect({ value: param }).to.deep.equal(SampleService.getParametrizedSample(param));
    });
  });
});
