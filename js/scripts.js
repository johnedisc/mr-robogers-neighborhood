// utility




// business

function numToKeyword(indexNumbr) {
  const one = /\b\d*1\d*/;
  const two = /\b\d*2\d*/;
  return indexNumbr.toString().replace(two, 'Boop!').replace(one, 'Beep!'); 
}

function createArr(usrNumbr) {
  if (usrNumbr < 0) {
    return null;
  }
  const arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }
  return arr;
}


// userinterface
