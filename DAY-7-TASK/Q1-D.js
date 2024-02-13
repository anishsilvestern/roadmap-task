let XMLhttpRequest = require("xhr2");

let xhr = new XMLhttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function(){
    let countries = JSON.parse(xhr.responseText);

    let populationArray = countries.map(countries => countries.population)

        let total = populationArray.reduce((prevtotal, currpopulation) => prevtotal + currpopulation)

            console.log(`Total Population = ${total}`)
    
};

