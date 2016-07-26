
var StringAlternative = (function(){
  var self = {};
  var count;
  var alternatives;

  self.count = function(number) {
    alternatives = undefined;
    count = number;
    return self;
  }

  self.zero = function(zero) {
    if(typeof alternatives === 'object') {
      alternatives.zero = zero;
    }
    else {
      alternatives = {
        zero : zero
      }
    }
    return self;
  }

  self.one = function(one) {
    if(typeof alternatives === 'object') {
      alternatives.one = one;
    }
    else {
      alternatives = {
        one : one
      }
    }
    return self;
  }

  self.many = function(many) {
    if(typeof alternatives === 'object') {
      alternatives.many = many;
    }
    else {
      alternatives = {
        many : many
      }
    }
    return self;
  }

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
})();

module.exports = StringAlternative;
