// utility

function checkName(name) {
  return name === '' ? 'hello' : name; 
}

function negativeCheck(usrNumbr) {
  if (usrNumbr < 0 || usrNumbr > 500) {
    return null;
  } else {
    return createArr(usrNumbr);
  } 
}

// business

function numToKeyword(indexNumbr) {
  // create string to use replace method
  return indexNumbr.toString().replace(/\b\d*3\d*/, 'won\'t you be my neighbor?').replace(/\b\d*2\d*/, 'boop!').replace(/\b\d*1\d*/, 'beep!'); 
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
    const usrName = document.getElementById('usrName').value.toLowerCase();

    // select html elements and print result from user
    const printResults = document.querySelector('#printResults h4');

    // print results
    if (negativeCheck(usrNumbr) === null) {
      printResults.innerText = `${checkName(usrName)}, thank you for being here. please enter a whole number greater than zero and less than 500.`;
    } else {
      printResults.innerText = `${checkName(usrName)}, thank you for being here. here are the results.

        ${negativeCheck(usrNumbr).join(', ')}`;
    };
  });
});
