
var StringAlternative = module.exports = function() {
  var self = {};
  var count;
  var alternatives;
  var alternativesList = ['zero', 'one', 'many', 'default'];

  self.count = function(number) {
    count = number;
    return self;
  }

  var buildAlternativesFunction = function(key) {
    return function(value) {
      if(typeof alternatives !== 'object') {
        alternatives = {};
      }
      alternatives[key] = value;
      return self;
    };
  };

  alternativesList.map(function(alternative){
    return self[alternative] = buildAlternativesFunction(alternative);
  })

  self.zom = function(zero, one, many) {
    self = self.zero(zero);
    self = self.one(one);
    self = self.many(many);
    return self;
  }

  self.toString = function() {
    var str = '';
    if(typeof count === 'number') {
      if(typeof alternatives === 'object') {
        /* Init str with default string */
        if(alternatives.default){
          str = alternatives.default;
        }
        /* State machine for alternatives*/
        if(count === 0 && alternatives.zero) {
          str = alternatives.zero;
        }
        else if(count === 1 && alternatives.one) {
          str = alternatives.one;
        }
        else if(count > 1 && alternatives.many) {
          str = alternatives.many;
        }
      }
      else {
        str = count.toString();
      }
    }
    return str;
  }
  return self;
};
