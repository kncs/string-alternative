var chai = require('chai')
  , expect = chai.expect
  , StringAlternative = require('../lib/index');


/*
 * First of all, check the module structure
 */
describe('General module structure tests', function () {

  var functionList = [
    'count',
    'toString',
    'zero',
    'one',
    'many',
    'zom',
    'default',
    'prefix',
    'suffix'
  ];

  describe('Library', function () {

    it('should be a function', function (done) {
      expect(StringAlternative).to.be.a('function');
      done();
    });

    functionList.map(function(name) {
      return it('should have method '+ name +'()', function (done) {
        expect(StringAlternative()[name]).to.be.a('function');
        done();
      });
    });
  });
});

describe('Functionnal tests', function () {
  describe('count() function', function () {
    it('should not initialize the count and return an empty string', function (done) {
      expect(StringAlternative().toString()).to.be.a('string').to.be.empty;
      done();
    });

    it('should initialize the count and return it into a string', function (done) {
      expect(StringAlternative().count(0).toString()).to.be.equal('0');
      done();
    });
  });

  describe('zero() function', function () {
    it('should return an empty string', function (done) {
      expect(StringAlternative().count(1).zero('zero').toString()).to.be.a('string').to.be.empty;
      done();
    });

    it('should select the zero string description', function (done) {
      expect(StringAlternative().count(0).zero('zero').toString()).to.be.equal('zero');
      done();
    });
  });

  describe('one() function', function () {
    it('should return an empty string', function (done) {
      expect(StringAlternative().count(0).one('one').toString()).to.be.a('string').to.be.empty;
      done();
    });

    it('should select the one string description', function (done) {
      expect(StringAlternative().count(1).one('one').toString()).to.be.equal('one');
      done();
    });
  });

  describe('many() function', function () {
    it('should return an empty string', function (done) {
      expect(StringAlternative().count(0).many('many').toString()).to.be.a('string').to.be.empty;
      done();
    });

    it('should select the many string description', function (done) {
      expect(StringAlternative().count(5).many('many').toString()).to.be.equal('many');
      done();
    });
  });

  describe('zom() function', function () {
    it('should select the zero string description', function (done) {
      expect(StringAlternative().count(0).zom('_zero', '_one', '_many').toString()).to.be.equal('_zero');
      done();
    });

    it('should select the one string description', function (done) {
      expect(StringAlternative().count(1).zom('_zero', '_one', '_many').toString()).to.be.equal('_one');
      done();
    });

    it('should select the many string description', function (done) {
      expect(StringAlternative().count(5).zom('_zero', '_one', '_many').toString()).to.be.equal('_many');
      done();
    });
  });

  describe('default() function', function () {
    it('should return the default string when alternative string is not defined', function (done) {
      expect(StringAlternative().default('default0').count(0).one('one').toString()).to.be.equal('default0');
      expect(StringAlternative().default('default1').count(1).many('many').toString()).to.be.equal('default1');
      expect(StringAlternative().default('default2').count(2).one('one').toString()).to.be.equal('default2');
      expect(StringAlternative().default('default').count(1).one('one').toString()).to.be.equal('one');
      done();
    });
  });

  describe('prefix() function', function () {
    it('should return the prefix string before alternative strings', function (done) {
      expect(StringAlternative().prefix('prefix_').default('default').toString()).to.be.equal('prefix_default');
      expect(StringAlternative().prefix('prefix_').count(0).zero('zero').toString()).to.be.equal('prefix_zero');
      expect(StringAlternative().prefix('prefix_').count(1).one('one').toString()).to.be.equal('prefix_one');
      expect(StringAlternative().prefix('prefix_').count(2).many('many').toString()).to.be.equal('prefix_many');
      done();
    });
  });

  describe('suffix() function', function () {
    it('should return the suffix string after alternative strings', function (done) {
      expect(StringAlternative().default('default').suffix('_suffix').toString()).to.be.equal('default_suffix');
      expect(StringAlternative().count(0).zero('zero').suffix('_suffix').toString()).to.be.equal('zero_suffix');
      expect(StringAlternative().count(1).one('one').suffix('_suffix').toString()).to.be.equal('one_suffix');
      expect(StringAlternative().count(2).many('many').suffix('_suffix').toString()).to.be.equal('many_suffix');
      done();
    });
  });
});
