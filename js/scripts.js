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
    arr.push(numToKeyword(i));
  }
  return arr;
}

// userinterface

window.addEventListener('load', e => {

  e.preventDefault();

  // select form and submit
  const form = document.getElementById('formDiv');
  form.addEventListener('submit', e => {

    // read in user input
    const usrNumbr = document.getElementById('usrNumbr').value;
     
    // select html elements and print result from user
    const printResults = document.getElementById('printResults h3').value;
    if (negativeCheck(usrNumbr) === null) {
      printResults.innerText = 'please provide a whole number greater than zero';
    } else {
      printResults.innerText = negativeCheck(usrNumbr);
    };
    


  });


});
