var StringAlternative = require('../lib/index');

for(var i=0; i<=10; i++) {
  var sa = StringAlternative()
    .count(i)
    .zero('Nobody is viewing')
    .one('One person is viewing')
    .many( i + ' people are viewing');

  console.log(sa.toString());
}

