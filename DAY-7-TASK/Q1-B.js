let XMLhttpRequest = require("xhr2");

let xhr = new XMLhttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function() {
let countries = JSON.parse(xhr.responseText)

let population2Lakh = countries.filter((countries) => {
    return countries.population < 200000
 })

 for(let key of Object.keys(population2Lakh)) {
    console.log(population2Lakh[key].name.common)
 }
    }