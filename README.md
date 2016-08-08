# String Alternative

String Alternative is a very small and simple javascript module created to help people to render different strings taking account different conditions.

Because a code example is probably more explicit than a long speech ...

# Installation

```bash
$ npm install --save string-alternative
```

# Code Examples

```javascript
var StringAlternative = require('string-alternative');

/* zero, one and many example */
for(var i=0; i<=5; i++) {
  var sa = StringAlternative()
    .count(i)
    .zero('Nobody is viewing')
    .one('One person is viewing')
    .many( i + ' people are viewing');

  console.log(sa.toString());
}

// Nobody is viewing
// One person is viewing
// 2 people are viewing
// 3 people are viewing
// 4 people are viewing
// 5 people are viewing

/* default, prefix and suffix example */

for(var i=0; i<=5; i++) {
  var sa = StringAlternative()
    .default(' result')
    .prefix('I found ' + i)
    .many(' results')
    .suffix(' matching with you research !')
    .count(i);

  console.log(sa.toString());
}

// I found 0 result matching with you research !
// I found 1 result matching with you research !
// I found 2 results matching with you research !
// I found 3 results matching with you research !
// I found 4 results matching with you research !
// I found 5 results matching with you research !
```

# Motivation

At the very begining of this project, the aim was to create a tiny module to manage one specific use case, ie allow a developper to get a readable and a super easy way for build different strings according to a number (0=>'No result', 1=>'One result', N=>'N results').

But why should I restrict the condition to be a equal to zero, one or many ? There is absolutly no reason and that's why I decided to implement other conditions (above, below, between, oneOf, ...)

# API Reference

## `.count(number)`

Define a number used as reference into the conditions

## `.default(str)`

Define a default string returned by the toString method when an alternative string is not defined

## `.prefix(str)`

Define a string to prefix result returned by the toString method

## `.suffix(str)`

Define a string to suffix result returned by the toString method

## `.toString()`

Return the alternative string matching with condition

## `.zero(str)`

Define the alternative string for a reference number equal to zero

## `.one(str)`

Define the alternative string for a reference number equal to one

## `.many(str)`

Define the "alternative string" for a reference number above one

## `.zom(zero, one, many)`

Define the three alternatives strings

## `.above(trigger, str)`

Define the alternative string for a reference number above a trigger.
Priority is given to the higher number

## `.below(trigger, str)`

Define the alternative string for a reference number below a trigger.
Priority is given to the lower number

# Roadmap

See below the list of next features which will be imlemented as soon as possible :

* ~~.default(str)~~
* ~~.prefix(str)~~
* ~~.suffix(str)~~
* ~~.above(trigger, str)~~
* ~~.below(trigger, str)~~
* .between(startTrigger, endTrigger, str)
* .oneOf(array, str)
* .equal(value, str)
* ...

# License

The MIT License (MIT)

Copyright (c) 2016 Kevin Clarens

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
