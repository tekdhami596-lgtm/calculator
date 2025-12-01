 let calculation = localStorage.getItem('calculation')|| '';
    displayCalculation();

function updateCalcultion(value){
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation',calculation);
}

function displayCalculation(){
  document.querySelector('.js-calculation')
  .innerHTML=calculation;
}

// keyboard events added

document.addEventListener('keydown', (event)=>{
  const key = event.key;

  // number keys (0-9) and dot

   if(!isNaN(key)||key ==='.'){
    updateCalcultion(key);
   }

  //  operators : + - * /

  if (['+', '-', '*', '/'].includes(key)){
    updateCalcultion(key);
  }

  // enter calculate

  if(key ==='Enter'){
    try{
      calculation=eval(calculation);
    } 
    catch{
      calculation = 'error';
    }
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }

   // Backspace = delete last char
    if(key === 'Backspace') {
      calculation = calculation.slice(0, -1);
      displayCalculation();
      localStorage.setItem('calculation', calculation);
    }

  // escape = clear

  if(key==='Escape'){
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }


})