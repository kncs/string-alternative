var chai = require('chai')
  , expect = chai.expect
  , sa = require('../lib/index');


/*
 * First of all, check the module structure
 */
describe('General module structure tests', function () {
  describe('Library', function () {
    it('should be an object', function (done) {
      expect(sa).to.be.an('object');
      done();
    });

    it('should have method count()', function (done) {
      expect(sa.count).to.be.a('function');
      done();
    });

    it('should have method toString()', function (done) {
      expect(sa.toString).to.be.a('function');
      done();
    });

    it('should have method zeroOneN()', function (done) {
      expect(sa.zeroOneN).to.be.a('function');
      done();
    });
  });
});

describe('Functionnal tests', function () {
  describe('count() function', function () {
    it('should not initialize the count and return an empty string', function (done) {
      expect(sa.toString()).to.be.a('string').to.be.empty;
      done();
    });

    it('should initialize the count and return it into a string', function (done) {
      expect(sa.count(0).toString()).to.be.equal('0');
      done();
    });
  });

  describe('zeroOneN() function', function () {
    it('should select the zero string description', function (done) {
      expect(sa.count(0).zeroOneN('zero', 'one', 'many').toString()).to.be.equal('zero');
      done();
    });

    it('should select the one string description', function (done) {
      expect(sa.count(1).zeroOneN('zero', 'one', 'many').toString()).to.be.equal('one');
      done();
    });

    it('should select the many string description', function (done) {
      expect(sa.count(5).zeroOneN('zero', 'one', 'many').toString()).to.be.equal('many');
      done();
    });
  });
});
