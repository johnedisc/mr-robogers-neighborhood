
# mr roboger's neighborhood

#### by [johnedisc](https://johnedisc.github.io/portfolio/)

#### an excercise and looping, branching, and manipulating arrays

## technologies used

* html
* css
* javascript

## description



## setup/installation requirements

* visit the site [here]()
* clone down the [repository from github]() inside the directory of your choosing
```bash
git clone 
```
* open index.html in your favorite browser
* browse as you would any website

## known Bugs

* 

## tech learned in making the site

* vim: use 
```bash
cit
```
 to erase text insidee HTML TAGS and insert text
* vim: use 
```bash
:s!^!//!
``` 
 to comment out a line or all selected lines
*.querySelector() will take any attribute name like this: 
```javascript
.querySelector("[attr='value']")
```

## testing and layout

We first need a function that takes a positive number and stores all the numbers from 0 up to that number in an array.  

describe: createArr(usrNumbr)

Test: "It should return an array with the numbers from 0 to ${number}."
Code:
const num = 3;
createArr(num);
Expected Output: [0,1,2,3]

Test: "It should return null if ${usrNumbr} < 0"
Code:
const num = -1;
createArr(num);
Expected Output: null

describe: numToKeyword(indexNumbr)

Test: "Should take a number and return Beep! if number = 1"
Code:
const num = 1;
numToKeyword(num);
Expected Output: Beep!

forgot to convert indexNumbr to a string!!

Test: "Should return Boop! if indexNumbr is 2"
Code:
const num = 2;
numToKeyword(num);
Expected Output: Boop!

Test: "Should return "Won't you be my neighbor?" if indexNumbr is 3"
Code:
const num = 3;
numToKeyword(num);
Expected Output: "Won't you be my neighbor?"

describe: negativeCheck() ==> createArr() ==> numToKeyword()

Test: "giving positive number to negativeCheck() should return an array from createArr()"
Code:
const num = 1;
negativeCheck(num);
Expected Output: [0,1]

Test: "giving positive number to negativeCheck() should return array with keywords inserted from numToKeyword()"
Code:
const num = 3;
negativeCheck(num);
Expected Output: [0,'beep!','boop!','won\'t you be my neighbor']

## license

feel free to get in touch at [christopher(dot)johnedis(at)gmail(dot)com](christopher.johnedis@gmail.com)

Copyright (c) 1.13.23 [johnedisc](https://johnedisc.github.io/portfolio/)
