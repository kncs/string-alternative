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

    it('should have method zero()', function (done) {
      expect(sa.zero).to.be.a('function');
      done();
    });

    it('should have method one()', function (done) {
      expect(sa.one).to.be.a('function');
      done();
    });

    it('should have method many()', function (done) {
      expect(sa.many).to.be.a('function');
      done();
    });

    it('should have method zom()', function (done) {
      expect(sa.zom).to.be.a('function');
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

  describe('zero() function', function () {
    it('should return an empty string', function (done) {
      expect(sa.count(1).zero('zero').toString()).to.be.a('string').to.be.empty;
      done();
    });

    it('should select the zero string description', function (done) {
      expect(sa.count(0).zero('zero').toString()).to.be.equal('zero');
      done();
    });
  });

  describe('one() function', function () {
    it('should return an empty string', function (done) {
      expect(sa.count(0).one('one').toString()).to.be.a('string').to.be.empty;
      done();
    });

    it('should select the one string description', function (done) {
      expect(sa.count(1).one('one').toString()).to.be.equal('one');
      done();
    });
  });

  describe('many() function', function () {
    it('should return an empty string', function (done) {
      expect(sa.count(0).many('many').toString()).to.be.a('string').to.be.empty;
      done();
    });

    it('should select the many string description', function (done) {
      expect(sa.count(5).many('many').toString()).to.be.equal('many');
      done();
    });
  });

  describe('zom() function', function () {
    it('should select the zero string description', function (done) {
      expect(sa.count(0).zom('_zero', '_one', '_many').toString()).to.be.equal('_zero');
      done();
    });

    it('should select the one string description', function (done) {
      expect(sa.count(1).zom('_zero', '_one', '_many').toString()).to.be.equal('_one');
      done();
    });

    it('should select the many string description', function (done) {
      expect(sa.count(5).zom('_zero', '_one', '_many').toString()).to.be.equal('_many');
      done();
    });
  });
});
