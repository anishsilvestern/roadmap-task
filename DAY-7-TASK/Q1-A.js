let XMLhttpRequest = require('xhr2');

let xhr = new XMLhttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let  countries = JSON.parse(xhr.responseText);

        let asiaCountries = countries.filter(countries => {
            return countries.region === "Asia"
         })
        
         for(let key of Object.keys(asiaCountries)) {
            console.log(asiaCountries[key].name.common)
         }
             }
          
    

    
            
    
    
      
   

   
