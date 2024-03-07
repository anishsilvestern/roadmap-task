 let h1 = document.createElement('h1');
 h1.classList.add('text-center', 'mt-4');
 h1.innerText = "Countries Weather";
 document.body.appendChild(h1)


 fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => {

        data.sort((a, b) => {
            return a.name.common.localeCompare(b.name.common);
        });


        data.forEach(country => {
            createCountryCard(country);
        });
    })
    .catch(error => console.error("Error fetcing data", error))

    let row = document.createElement('div');
    row.classList.add('row');
    document.body.appendChild(row)

 function createCountryCard(countryData) {

 let div = document.createElement('div');
 div.classList.add('col-lg-4', 'col-sm-12', 'cardbody');
 row.appendChild(div);  

 let card = document.createElement('div');
 card.classList.add('card');
 div.appendChild(card);

 let cardTitle = document.createElement('h5');
 cardTitle.classList.add('cardtitle')
 cardTitle.innerText = countryData.name.common;
 card.appendChild(cardTitle);

 let countryImage = document.createElement('img');
 countryImage.setAttribute('id', 'image')
 countryImage.src = countryData.flags.svg;
 countryImage.alt = 'Country Flag';
 card.appendChild(countryImage)

  allCapital(countryData, card);

 let countryRegion = document.createElement('p');
 countryRegion.setAttribute('id','region');
 countryRegion.innerText = `Region: ${countryData.region}`;
 card.appendChild(countryRegion)

 let countryCode = document.createElement('p');
 countryCode.setAttribute('id','code');
 countryCode.innerText = `Country Code: ${countryData.cca3}`;
 card.appendChild(countryCode)

 weatherApi(countryData , card)
    
 }

 function allCapital(countryData, card) {
    let countryCapital = document.createElement('p');
    countryCapital.setAttribute('id','capital');
    if(countryData.capital) {
        countryCapital.innerText = `Capital: ${countryData.capital}`;
    }else {
        countryCapital.innerText = `Capital: No Capital`;
    }
    card.appendChild(countryCapital)
 }
 
 function weatherApi(countryData , card) {
    if(countryData.capital){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital},${countryData.cca3}&appid=9b3abd72af5e8ee4c215adb53b59b0e5')
        .then(respones => respones.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error("Error Fecthing data", error));
 

        let weatherCheck = document.createElement('a');
        weatherCheck.classList.add('btn', "btn-primary")
        weatherCheck.href = `https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital},${countryData.cca3}&appid=9b3abd72af5e8ee4c215adb53b59b0e5`
        weatherCheck.innerText = "Click for Weather";
        card.appendChild(weatherCheck)
    }else{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=${countryData.cca3}&appid=9b3abd72af5e8ee4c215adb53b59b0e5')
        .then(respones => respones.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error("Error Fecthing data", error));
 

        let weatherCheck = document.createElement('a');
        weatherCheck.classList.add('btn', "btn-primary")
        weatherCheck.href = `https://api.openweathermap.org/data/2.5/weather?q=${countryData.cca3}&appid=9b3abd72af5e8ee4c215adb53b59b0e5`
        weatherCheck.innerText = "Click for Weather";
        card.appendChild(weatherCheck)
      }
 }






