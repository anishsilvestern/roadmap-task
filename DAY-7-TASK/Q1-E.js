let XMLhttpRequest = require("xhr2");

let xhr = new XMLhttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText)

    let usdCountries = countries.filter(countries => {
        return countries.currencies && countries.currencies.USD 
       
    })
   
    for(let key of Object.keys(usdCountries)) {
        console.log(usdCountries[key].name.common)
    }

}

    




