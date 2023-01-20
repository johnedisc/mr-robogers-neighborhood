// utility

function checkName(name) {
  return name === '' ? 'hello' : name; 
}

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

window.addEventListener('load', (e) => {

  // select form and submit
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    // read in user input
    const usrNumbr = document.getElementById('usrNumbr').value;
    const usrName = document.getElementById('usrName').value;
    const thoughts = document.getElementById('thoughts').value;

    // select html elements and print result from user
    const printResults = document.querySelector('#printResults h3');

    // print results
    if (negativeCheck(usrNumbr) === null) {
      printResults.innerText = `${checkName(usrName.toLowerCase())}, thank you for being here. please enter a whole number greater than zero.`;
    } else {
      printResults.innerText = `${checkName(usrName.toLowerCase())}, thank you for being here. here are the results.

        ${negativeCheck(usrNumbr).join(', ')}`;
    };
    


  });


});
