let heading = document.createElement('h1');
heading.classList.add('heading', 'text-center', 'mt-4', 'p-2')
heading.innerHTML = '<strong>FILL FORM</strong>'
document.body.appendChild(heading)

let form = document.createElement('form');
form.classList.add('row', 'g-3', 'm-3', 'needs-validation')
document.body.appendChild(form);

let firstNameDiv = document.createElement('div');
firstNameDiv.classList.add('col-md-4');
form.appendChild(firstNameDiv);

let firstNameLabel = document.createElement('label');
firstNameLabel.setAttribute('for', 'validationCustom01');
firstNameLabel.classList.add('form-label');
firstNameLabel.innerHTML = '<strong>First Name</strong>';

let firstNameInput = document.createElement('input');
firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('id', 'validationCustom01');
firstNameInput.setAttribute('class', 'form-control');
firstNameInput.setAttribute('required','');
firstNameDiv.append(firstNameLabel, firstNameInput)

let LastNameDiv = document.createElement('div');
LastNameDiv.classList.add('col-md-4');
form.appendChild(LastNameDiv);

let lastNameLabel = document.createElement('label');
lastNameLabel.setAttribute('for', 'validationCustom02');
lastNameLabel.classList.add('form-label');
lastNameLabel.innerHTML = '<strong>Last Name</strong>';

let lastNameInput = document.createElement('input');
lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('id', 'validationCustom02');
lastNameInput.setAttribute('class', 'form-control');
lastNameInput.setAttribute('required', '');
LastNameDiv.append(lastNameLabel, lastNameInput)

let genderDiv = document.createElement('div');
genderDiv.classList.add('col-md-4');
form.appendChild(genderDiv)

let genderLabel = document.createElement('label');
genderLabel.setAttribute('for', 'validationCustomUsername');
genderLabel.classList.add('form-label');
genderLabel.innerHTML = '<strong>Gender</strong>';

let genderInputGroupDiv = document.createElement('div');
genderInputGroupDiv.classList.add('input-group', 'has-validation');
genderDiv.append(genderLabel, genderInputGroupDiv)


let genderSelectElement = document.createElement('select');
genderSelectElement.setAttribute('type', 'text');
genderSelectElement.classList.add('form-control');
genderSelectElement.setAttribute('id', 'validationCustomUsername');
genderSelectElement.setAttribute('aria-describedby', 'inputGroupPrepend');
genderSelectElement.setAttribute('required', '');
genderInputGroupDiv.appendChild(genderSelectElement)


let maleOption = document.createElement('option');
maleOption.value = 'male';
maleOption.textContent = 'Male';

let femaleOption = document.createElement('option');
femaleOption.value = 'female';
femaleOption.textContent = 'Female';

let otherOption = document.createElement('option');
otherOption.value = 'other';
otherOption.textContent = 'Other';

genderSelectElement.append(maleOption, femaleOption, otherOption)

let favouriteFood = document.createElement('h4');
favouriteFood.classList.add('foodheading', 'text-center', 'mt-4', 'p-2');
favouriteFood.innerHTML = '<strong>Favourite Food</strong>';
form.appendChild(favouriteFood);

let favouriteFoodDiv = document.createElement('div');
favouriteFoodDiv.classList.add('row', 'ms-5', 'mt-4');
form.appendChild(favouriteFoodDiv);

let checkBoxLabel = ['Briyani', 'Pasta', 'Pizza', 'Chicken', 'Fish'];

 for(let i = 0; i < checkBoxLabel.length; i++) {
        let col = document.createElement('div');
        col.classList.add('col-md-2');
        favouriteFoodDiv.appendChild(col);

        let formCheck = document.createElement('div');
        formCheck.classList.add('form-check');
        col.appendChild(formCheck);

        let checkBoxInput = document.createElement('input');
        checkBoxInput.setAttribute('type', 'checkbox');
        checkBoxInput.classList.add('form-check-input');
        checkBoxInput.setAttribute('name', 'favouriteFood');
        checkBoxInput.setAttribute('id', `checkbox${i + 1}`);
        formCheck.appendChild(checkBoxInput);

        let foodName = document.createElement('label');
        foodName.classList.add('form-check-label');
        foodName.setAttribute('for', `checkbox${i + 1}`);
        foodName.textContent = checkBoxLabel[i];
        formCheck.appendChild(foodName);        
}

  

   let addressDivCol = document.createElement('div');
   addressDivCol.classList.add('col-md-8');
   form.appendChild(addressDivCol);

   let addressLabel = document.createElement('label');
   addressLabel.setAttribute('for','validationCustom03');
   addressLabel.setAttribute('class','form-label');
   addressLabel.innerHTML = '<strong>Address</strong>';

   let addressInput = document.createElement('textarea');
   addressInput.setAttribute('name','textbox');
   addressInput.setAttribute('class', 'form-control');
   addressInput.setAttribute('id', 'validationCustom03');
   addressInput.setAttribute('cols', '70');
   addressInput.setAttribute('rows', '5');
   addressInput.setAttribute('required', '');

   addressDivCol.append(addressLabel, addressInput)

   let stateCountryDivCol = document.createElement('div');
   stateCountryDivCol.classList.add('col-md-4', 'g-4');
   form.appendChild(stateCountryDivCol);

   let stateRow = document.createElement('div');
   stateRow.classList.add('row');
   stateCountryDivCol.appendChild(stateRow);

   let stateLabel = document.createElement('label');
   stateLabel.setAttribute('for','validationCustom04');
   stateLabel.setAttribute('class','form-label');
   stateLabel.innerHTML = '<strong>State</strong>';

   let stateInput = document.createElement('input');
   stateInput.setAttribute('type','text');
   stateInput.setAttribute('class', 'form-control');
   stateInput.setAttribute('id', 'validationCustom04');
   stateInput.setAttribute('required', '');

   stateRow.append(stateLabel, stateInput)

   let countryRow = document.createElement('div');
   countryRow.classList.add('row', 'mt-2');
   stateCountryDivCol.appendChild(countryRow);

   let countryLabel = document.createElement('label');
   countryLabel.setAttribute('for','validationCustom05');
   countryLabel.setAttribute('class','form-label');
   countryLabel.innerHTML = '<strong>Country</strong>';

   let countryInput = document.createElement('input');
   countryInput.setAttribute('type','text');
   countryInput.setAttribute('class', 'form-control');
   countryInput.setAttribute('id', 'validationCustom05');
   countryInput.setAttribute('required', '');

   countryRow.append(countryLabel, countryInput)

   let pinCodeRow = document.createElement('div');
   pinCodeRow.classList.add('row', 'mt-3')
   form.appendChild(pinCodeRow)

   let pinCodeCol = document.createElement('div');
   pinCodeCol.classList.add('col-md-4', 'pinCodeCol');
   pinCodeRow.appendChild(pinCodeCol);

   let pinCodeLabel = document.createElement('label');
   pinCodeLabel.setAttribute('for','validationCustom05');
   pinCodeLabel.setAttribute('class','form-label');
   pinCodeLabel.innerHTML = '<strong>Pin Code</strong>';

   let pinCodeInput = document.createElement('input');
   pinCodeInput.setAttribute('type','number');
   pinCodeInput.setAttribute('class', 'form-control');
   pinCodeInput.setAttribute('id', 'validationCustom05');
   pinCodeInput.setAttribute('required', '');

   pinCodeCol.append(pinCodeLabel, pinCodeInput)

   let submitCol = document.createElement('div');
   submitCol.classList.add('col-md-4', 'submitCol');
   pinCodeRow.appendChild(submitCol);

   let submitButton = document.createElement('button');
   submitButton.setAttribute('type','submit');
   submitButton.setAttribute('class', 'btn btn-primary');
   submitButton.classList.add('submit', 'p-2')
   submitButton.innerText = 'Submit Form'

   submitCol.append(submitButton)

let tableContainer = document.createElement('div');
tableContainer.classList.add('col-sm-12', 'm-3');
document.body.appendChild(tableContainer);

let tableHeader = document.createElement('h2');
tableHeader.classList.add('tableheader','text-center', 'mt-5')
tableHeader.innerHTML = '<strong>Form Table</strong>';
tableContainer.appendChild(tableHeader);

let table = document.createElement('table');
table.classList.add('table', 'mt-4')
document.body.appendChild(table);

let tHead = document.createElement('thead');
table.appendChild(tHead);

let tr = document.createElement('tr');
tHead.appendChild(tr);

let tableHead = ['First Name', 'Last Name', 'Gender', 'Favourite Food', 'Address', 'State', 'Country','Pin Code'];

for(let i = 0; i < tableHead.length; i++) {
        let th = document.createElement('th');
        th.innerText = tableHead[i]
        tr.appendChild(th); 
}

form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        let checkedCount = document.querySelectorAll('input[name="favouriteFood"]:checked').length;
    
        if (checkedCount >= 2) {

            let formData = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                gender: genderSelectElement.value,
                favouriteFood: Array.from(document.querySelectorAll('input[name="favouriteFood"]:checked')).map(checkbox => checkbox.nextSibling.textContent).join(', '),
                address: addressInput.value,
                state: stateInput.value,
                country: countryInput.value,
                pinCode: pinCodeInput.value
            };
    
            let tableBody = table.createTBody();
            let row = tableBody.insertRow();
    
            for (let key in formData) {
                let cell = row.insertCell();
                cell.textContent = formData[key];
            }
        } else {
            alert('Please select at least two favourite foods.');
        }
    });
    