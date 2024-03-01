let h1 = document.createElement('h1');
h1.innerText = 'DOM Calculator';
document.body.appendChild(h1);

let Calculator = document.createElement('div');
Calculator.setAttribute("id", "calculator");
document.body.appendChild(Calculator);

let space = document.createElement("br");
Calculator.appendChild(space);

let inputDisplay = document.createElement('p');
inputDisplay.setAttribute("id", "inputdisplay");
inputDisplay.innerText = "0";
Calculator.appendChild(inputDisplay);

let allButton = document.createElement('div');
allButton.classList.add('row', 'allbutton', 'mt-3');
Calculator.appendChild(allButton);

let firstcol = document.createElement('div');
firstcol.classList.add('col-3');
allButton.appendChild(firstcol)

let firstrow = ['C', '7', '4', '1', '0'];

    let allRowFirst = document.createElement('div')
    allRowFirst.classList.add('row')
    firstcol.appendChild(allRowFirst)


  for (let value of firstrow) {
    let buttonRowFirst = document.createElement('button');
    buttonRowFirst.textContent = value;
    allRowFirst.appendChild(buttonRowFirst)
  }

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
    }


    let thirdCol = document.createElement('div');
  thirdCol.classList.add('col-3');
    allButton.appendChild(thirdCol)
    
    let thirdRow = ['%', '9', '6', '3', '=']
       
        let allRowThird = document.createElement('div')
        allRowThird.classList.add('row')
        thirdCol.appendChild(allRowThird)
  
      for (let value of thirdRow) {
        let buttonRowThird = document.createElement('button');
        buttonRowThird.textContent = value;         
        allRowThird.appendChild(buttonRowThird)   
           
      }
  


      let fourthCol = document.createElement('div');
      fourthCol.classList.add('col-3');
        allButton.appendChild(fourthCol)
        
        let fourthRow = ['X', '/', '-', '+']
        
        
            let allRowFourth = document.createElement('div')
            allRowFourth.classList.add('row')
            fourthCol.appendChild(allRowFourth)
        
        
          for (let value of fourthRow) {
            let buttonRowFourth = document.createElement('button');
            buttonRowFourth.textContent = value;
            allRowFourth.appendChild(buttonRowFourth)
          }
    




