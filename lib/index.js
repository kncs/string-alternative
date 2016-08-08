
var StringAlternative = module.exports = function() {
  var self = {};
  var count;
  var str = '';
  var alternatives;
  var alternativesList = ['zero', 'one', 'many', 'default', 'prefix', 'suffix'];
  var belowAlternatives = [];

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

  self.below = function(trigger, alternative) {
    belowAlternatives.push({
      trigger : trigger,
      alternative : alternative
    })
    return self;
  }

  self._assignAlternativeZero = function() {
    if(count === 0 && alternatives.zero) {
      str += alternatives.zero;
      return true;
    }
    return false;
  }

  self._assignAlternativeOne = function() {
    if(count === 1 && alternatives.one) {
      str += alternatives.one;
      return true;
    }
  }

  self._assignAlternativeMany = function() {
    if(count > 1 && alternatives.many) {
      str += alternatives.many;
      return true;
    }
    return false;
  }

  self._assignAlternativeDefault = function() {
    if(alternatives && alternatives.default) {
      str += alternatives.default;
      return true;
    }
    return false;
  }

  self._assignAlternativePrefix = function() {
    if(alternatives && alternatives.prefix) {
      str += alternatives.prefix;
      return true;
    }
    return false;
  }

  self._assignAlternativeSuffix = function() {
    if(alternatives && alternatives.suffix) {
      str += alternatives.suffix;
      return true;
    }
    return false;
  }

  self._assignAlternativesBelow = function() {
    var status = false;
    if(belowAlternatives.length > 0) {
      var tmp = belowAlternatives
        .sort(function(a, b) {
          return a.trigger - b.trigger
        })
        .reduce(function(current, below) {
          if(current === '' && count < below.trigger) {
            status = true;
            return below.alternative
          }
          return '';
        }, '');
      if(status) str += tmp;
    }
    return status;
  }



  self.toString = function() {
    str = '';

    /* Add prefix when necessary */
    self._assignAlternativePrefix(str);

    /* State machine for alternatives*/
    if(typeof count === 'number') {
      if(typeof alternatives === 'object') {
        var buildAlternative = self._assignAlternativeZero()
          || self._assignAlternativeOne()
          || self._assignAlternativesBelow()
          || self._assignAlternativeMany();

        /* Init str with default string */
        if(!buildAlternative) {
          self._assignAlternativeDefault();
        }
      }
      else {
        str += count.toString();
      }
    }
    else {
      /* Init str with default string */
      self._assignAlternativeDefault();
    }

    /* Add suffix when necessary */
    self._assignAlternativeSuffix();
    return str;
  }
  return self;
};
