
# mr roboger's neighborhood

#### by [johnedisc](https://johnedisc.github.io/portfolio/)

#### an excercise and looping, branching, and manipulating arrays

## technologies used

* html
* css
* javascript

## description

* a brief exploration of compartmentalizing functions so they do as close to one job as possible.
* the user enters a number and their name and the site will print out a pop fizz type statement on the screen.

## setup/installation requirements

* visit the site [here](https://johnedisc.github.io/mr-robogers-neighborhood)
* clone down the [repository from github](https://github.com/johnedisc/mr-robogers-neighborhood) inside the directory of your choosing
```bash
git clone 
```
* open index.html in your favorite browser
* browse as you would any website

## known Bugs

* image background is sometimes not centered

## tech learned in making the site

* vim: use 
```bash
:[range]s/char/char replace/g

# for example to select lines 1-10, globally

:1,10s/char/new char/g
``` 
to select the lines for your substitute (search and replace). with no 'g' flag, this will only return the first result on a line.

## testing and layout

We first need a function that takes a positive number and stores all the numbers from 0 up to that number in an array.  

describe: createArr(usrNumbr)

test: "It should return an array with the numbers from 0 to ${number}."
code:
const num = 3;
createArr(num);
expected Output: [0,1,2,3]

test: "It should return null if ${usrNumbr} < 0"
code:
const num = -1;
createArr(num);
expected Output: null

describe: numToKeyword(indexNumbr)

test: "Should take a number and return Beep! if number = 1"
code:
const num = 1;
numToKeyword(num);
expected Output: Beep!

forgot to convert indexNumbr to a string!!

test: "Should return Boop! if indexNumbr is 2"
code:
const num = 2;
numToKeyword(num);
expected Output: Boop!

test: "Should return "Won't you be my neighbor?" if indexNumbr is 3"
code:
const num = 3;
numToKeyword(num);
expected Output: "Won't you be my neighbor?"

describe: negativeCheck() ==> createArr() ==> numToKeyword()

test: "giving positive number to negativeCheck() should return an array from createArr()"
code:
const num = 1;
negativeCheck(num);
expected Output: [0,1]

test: "giving positive number to negativeCheck() should return array with keywords inserted from numToKeyword()"
code:
const num = 3;
negativeCheck(num);
expected Output: [0,'beep!','boop!','won\'t you be my neighbor']

describe: checkName(name)

test: "should return 'hello' if user doesn't provide name"
code:
const name = '';
negativeCheck(name);
expected Output: hello

## license

feel free to get in touch at [christopher(dot)johnedis(at)gmail(dot)com](christopher.johnedis@gmail.com)

Copyright (c) 1.20.23 [johnedisc](https://johnedisc.github.io/portfolio/)
