// utility

function negativeCheck(usrNumbr) {
  if (usrNumbr < 0) {
    return null;
  } else {
    return createArr(usrNumbr);
  } 
}



// business

function numToKeyword(indexNumbr) {
  // define regexp to match numbers
  const one = /\b\d*1\d*/;
  const two = /\b\d*2\d*/;
  const three = /\b\d*3\d*/;
  // create string to use replace method
  return indexNumbr.toString().replace(three, 'won\'t you be my neighbor?').replace(two, 'boop!').replace(one, 'beep!'); 
}

function createArr(usrNumbr) {
  const arr = [];
  for (let i = 0; i <= usrNumbr; i++) {
    arr.push(i);
  }
  return arr;
}


// userinterface
