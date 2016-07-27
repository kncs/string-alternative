var StringAlternative = require('../index');

/* zero, one and many example */
for(var i=0; i<=10; i++) {
  var sa = StringAlternative()
    .count(i)
    .zero('Nobody is viewing')
    .one('One person is viewing')
    .many( i + ' people are viewing');

  console.log(sa.toString());
}

/* default, prefix and suffix example */

for(var i=0; i<=10; i++) {
  var sa = StringAlternative()
    .default(' result')
    .prefix('I found ' + i)
    .many(' results')
    .suffix(' matching with you research !')
    .count(i);

  console.log(sa.toString());
}


