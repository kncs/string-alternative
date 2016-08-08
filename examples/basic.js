var StringAlternative = require('../index');

/* zero, one and many example */

var sa = StringAlternative()
  .zero('Nobody is viewing')
  .one('One person is viewing')

for(var i=0; i<=5; i++) {
  sa.many( i + ' people are viewing');
  console.log(sa.count(i).toString());
}


/* default, prefix and suffix example */

var sa = StringAlternative()
  .default(' result')
  .many(' results')
  .suffix(' matching with you research !');

for(var i=0; i<=5; i++) {
  sa.prefix('I found ' + i);
  console.log(sa.count(i).toString());
}

/* below and above example */

var sa = StringAlternative()
  .zero('O_o nobody seems to like your project')
  .one('Cool that a cute start baby')
  .many('Not bad')
  .above(100, 'Your project seems to match people needs')
  .above(1000, 'Your project is awesome')
  .above(10000, 'Congrats ! Your project is approved by Chuck Norris')

/* How many times your project has been starred ? */
console.log(sa.count(0).toString());
console.log(sa.count(1).toString());
console.log(sa.count(80).toString());
console.log(sa.count(120).toString());
console.log(sa.count(1500).toString());
console.log(sa.count(10001).toString());
