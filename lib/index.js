
var StringAlternative = (function(){
  var self = {};
  var count = null;
  var alternatives = null;

  self.count = function(number) {
    count = number;
    return self;
  }

  self.zeroOneN = function(zero, one, many) {
    alternatives = {
      zero : zero,
      one : one,
      many : many
    }
    return self;
  }

  self.toString = function() {
    var str = '';
    if(count !== null) {
      if(alternatives !== null) {
        if(count === 0) {
          str = alternatives.zero;
        }
        else if(count === 1) {
          str = alternatives.one;
        }
        else if(count > 1) {
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
