// volt-e '=' gomb
let ans = false;

// szám és pont bevitele
function addDisplayText(text) {
  const input = document.querySelector('#display');
  let string = input.innerHTML;
  // újrakezdődik a bevitel, ha volt = gomb
  if (ans === true) {
    string = '';
    ans = false;
  }
  input.innerHTML = string + text;
}

// műveleti jel bevitele
function addDisplayFunction(text) {
  const input = document.querySelector('#display');
  const string = input.innerHTML;
  // eredmény gomb után nem adja hozzá a műveletet és ha az előző egy művelet volt
  if (ans !== true && string !== '' && string[string.length - 1] !== ' ') {
    input.innerHTML = `${string} ${text} `; // művelet elött-után 1-1 space, nincs error
  }
}

// törlés
function clearAll() {
  document.querySelector('#display').innerHTML = '';
}

// számítás
function equalButton() {
  const input = document.querySelector('#display');
  const string = input.innerHTML;
  if (string !== '') { // ha nem üres
    ans = true;
    const words = string.split(' '); // darabolás space szerint
    if (words[words.length - 1] === '') { // ha a vége egy műveleti jel
      input.innerHTML = 'Error!';
    } else {
      let result = parseFloat(words[0]); // első adat
      for (let i = 0; i < words.length - 1; i += 2) {
        const operator = words[1 + i]; // művelet
        const argument = parseFloat(words[2 + i]); // további adat
        // számítás a művelet alapján
        if (operator === '+') result += argument;
        if (operator === '*') result *= argument;
        if (operator === '/') result /= argument;
        if (operator === '-') result -= argument;
      }
      input.innerHTML = result;
    }
  }
}
