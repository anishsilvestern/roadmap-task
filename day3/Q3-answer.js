let XMLhttpRequest = require('xhr2');

let xhr = new XMLhttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let  countries = JSON.parse(xhr.responseText);
      
 

     for(let intex in Object.keys(countries)){
        let countryName = countries[intex].name.common;
        let region = countries[intex].region
        let subRegion = countries[intex].subregion
        let Population = countries[intex].population



      let countriesOutput = {
         countryName,
         region,
         subRegion,
         Population
      } 



        console.log(countriesOutput)
     };

     };
