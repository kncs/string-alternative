
var StringAlternative = (function(){
  var self = {};
  var count = null;

  self.count = function(number) {
    count = number;
    return self;
  }

  self.toString = function() {
    if(count !== null) {
      return count.toString();
    }
    else {
      return '';
    }
  }

  return self;
})();

module.exports = StringAlternative;
