let h1 = document.createElement('h1');
h1.setAttribute('id', 'title')
h1.innerText = 'DOM Calculator';
document.body.appendChild(h1);

let Calculator = document.createElement('div');
Calculator.setAttribute("id", "calculator");
document.body.appendChild(Calculator);

let space = document.createElement("br");
Calculator.appendChild(space);

let inputDisplay = document.createElement('input');
inputDisplay.setAttribute("id", "inputdisplay");
inputDisplay.setAttribute("type", "texts");
inputDisplay.value = "";
inputDisplay.placeholder = '0'
Calculator.appendChild(inputDisplay);

let allButton = document.createElement('div');
allButton.classList.add('row', 'allbutton', 'mt-3');
Calculator.appendChild(allButton);

let firstCol = document.createElement('div');
firstCol.classList.add('col-3');
allButton.appendChild(firstCol)

let firstColFirstRow = document.createElement('div')
firstColFirstRow.classList.add('row')
firstCol.appendChild(firstColFirstRow)
let clear = document.createElement('button');
clear.setAttribute('id', 'clear');
clear.textContent = 'C'
firstColFirstRow.appendChild(clear)

clear.addEventListener('click', () => {
  inputDisplay.value = "";
})

console.log(inputDisplay.value)

let firstrow = [ '7', '4', '1', '0'];

    let allRowFirst = document.createElement('div')
    allRowFirst.classList.add('row')
    firstCol.appendChild(allRowFirst)


  for (let value of firstrow) {
    let buttonRowFirst = document.createElement('button');
    buttonRowFirst.textContent = value;
    allRowFirst.appendChild(buttonRowFirst)

    buttonRowFirst.addEventListener('click', () => {
      if (inputDisplay.value === "") {
          inputDisplay.value = value;
      } else if (value == 'C') {
        inputDisplay.value = '';
      }      
      else{
          inputDisplay.value += value;
      }
  })}

let secCol = document.createElement('div');
  secCol.classList.add('col-3');
  allButton.appendChild(secCol)

let secRow = ['.', '8', '5', '2', '00']
  
  
      let allRowSec = document.createElement('div')
      allRowSec.classList.add('row')
      secCol.appendChild(allRowSec)
  
  
    for (let value of secRow) {
      let buttonRowSec = document.createElement('button');
      buttonRowSec.textContent = value;
      allRowSec.appendChild(buttonRowSec)

      buttonRowSec.addEventListener('click', () => {
        inputDisplay.value += value
    })}

  let thirdCol = document.createElement('div');
  thirdCol.classList.add('col-3');
  allButton.appendChild(thirdCol)

  let thirdColFirstRow = document.createElement('div');
  thirdColFirstRow.classList.add('row')
  thirdCol.appendChild(thirdColFirstRow);
  let modules = document.createElement('button');
  modules.setAttribute('class', 'modules');
  modules.innerText = '%';
  thirdColFirstRow.appendChild(modules);
  
  modules.addEventListener('click', () => {
      inputDisplay.value += '%'
    }
  )

  let thirdRow = ['9', '6', '3']
       
        let allRowThird = document.createElement('div')
        allRowThird.classList.add('row')
        thirdCol.appendChild(allRowThird)
  
      for (let value of thirdRow) {
        let buttonRowThird = document.createElement('button');
        buttonRowThird.textContent = value;     
        allRowThird.appendChild(buttonRowThird)   
           
        buttonRowThird.addEventListener('click', () => {
          inputDisplay.value += value
      })}

      let equaltodiv = document.createElement('div');
      equaltodiv.classList.add('row')
      let equalto = document.createElement('button')
      equalto.classList.add('equalto')
      equalto.textContent = '='
      thirdCol.appendChild(equalto)

  
      let fourthCol = document.createElement('div');
      fourthCol.classList.add('col-3');
      allButton.appendChild(fourthCol)

      let fourthColFirstRow = document.createElement('div');
      fourthColFirstRow.classList.add('row')
      fourthCol.appendChild(fourthColFirstRow)
      let multiply = document.createElement('button');
      multiply.setAttribute('class', 'multiply');
      multiply.innerText = "X";
      fourthColFirstRow.appendChild(multiply);

      multiply.addEventListener('click', () => {
        inputDisplay.value += 'x'
      })

      let fourthColSecRow = document.createElement('div');
      fourthColSecRow.classList.add('row')
      fourthCol.appendChild(fourthColSecRow)
      let division = document.createElement('button');
      division.setAttribute('class', 'division');
      division.innerText = "/";
      fourthColSecRow.appendChild(division);

      division.addEventListener('click', () => {
        inputDisplay.value += '/'
      })


      let fourthColThirdRow = document.createElement('div');
      fourthColThirdRow.classList.add('row')
      fourthCol.appendChild(fourthColThirdRow)
      let subtraction = document.createElement('button');
      subtraction.setAttribute('class', 'division');
      subtraction.innerText = "-";
      fourthColThirdRow.appendChild(subtraction);

      subtraction.addEventListener('click', () => {
        inputDisplay.value += '-'
      })

      let fourthColFourRow = document.createElement('div');
      fourthColFourRow.classList.add('row')
      fourthCol.appendChild(fourthColFourRow)
      let addition = document.createElement('button');
      addition.setAttribute('class', 'division');
      addition.innerText = "+";
      fourthColFourRow.appendChild(addition);

      addition.addEventListener('click', () => {
        inputDisplay.value += '+'
      })

      equalto.addEventListener('click', () => {
        if(inputDisplay.value.includes('%')) {
            let modulesValue = inputDisplay.value.split('%').map(Number);
            if(modulesValue.length >= 2) {
              results = modulesValue[0];
              for(let i = 1; i < modulesValue.length; i++){
                results %= modulesValue[i];
                inputDisplay.value = results;
              }
            }
          }else if(inputDisplay.value.includes('x')) {
                let multiplyValue = inputDisplay.value.split('x').map(Number);
                if(multiplyValue.length >= 2) {
                  results = multiplyValue[0]
                  for(let i = 1; i < multiplyValue.length; i++){
                    results *= multiplyValue[i];
                    inputDisplay.value = results;
                  }
                }
          }else if(inputDisplay.value.includes('/')) {
            let divisionValue = inputDisplay.value.split('/').map(Number);
              if(divisionValue.length >= 2){
                results = divisionValue[0];
                for(i = 1; i < divisionValue.length; i++){
                  if(divisionValue[i] !== 0){
                    results /= divisionValue[i];
                    inputDisplay.value = results
                  }else {
                      inputDisplay.value = 'Error'
                  } 
                }
              }
          }else if(inputDisplay.value.includes('-')) {
            let subtractionValue = inputDisplay.value.split('-').map(Number);
            if(subtractionValue.length >= 2){
              results = subtractionValue[0];
              for(i = 1; i < subtractionValue.length; i++){
                results -= subtractionValue[i];
                inputDisplay.value = results
              }
            }
          }else if(inputDisplay.value.includes('+')) {
            let additionValue = inputDisplay.value.split('+').map(Number);
              if(additionValue.length >= 2){
                results = additionValue[0];
                for(let i = 1; i < additionValue.length; i++){
                  results += additionValue[i];
                  inputDisplay.value = results;
                }
              }
          }})

          document.addEventListener('keyup', (event) => {           
            if(['1','2','3','4','5','6','7','8','9','0','/','*','-','+','%'].includes(event.key)){
                if(inputDisplay.value === 'Number Only'){
                  inputDisplay.value = event.key
                
                }else {inputDisplay.value += event.key
              }                  
            
            }else if (event.key === 'Enter') {
              equalto.click();
         
            }else if(event.key === 'Backspace') {
             clear.click();
          
            }else {
            inputDisplay.value = 'Number Only';
          }
        });

          
        