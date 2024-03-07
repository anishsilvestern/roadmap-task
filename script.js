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

 let weatherCheck = document.createElement('button');
 weatherCheck.classList.add('btn', "btn-primary")
 weatherCheck.innerText = "Click for Weather";
 card.appendChild(weatherCheck)

 let weatherInfo = document.createElement('p');
 weatherInfo.classList.add('text-center', 'mt-3', 'd-none', 'weather-info');
 card.appendChild(weatherInfo)

weatherCheck.addEventListener('click', (e) => {
toggleWeather(countryData, e, weatherInfo);
});
    
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
 

 async function toggleWeather(countryData, e, weatherInfo) {
    let [lat, lon] = countryData.latlng;

    weatherInfo.classList.remove('d-none');
    e.target.classList.add('d-none');

    try {
        let weather = await getWeather(lat, lon);
        weatherInfo.textContent = `Weather: ${weather.weather[0].description}`;
    } catch (error) {
        console.error("Error fetching weather", error);
        weatherInfo.textContent = "Weather data not available";
    }
}

async function getWeather(lat, lon) {
    let apiKey = 'a3eb26f47d7fa7e06a5e55ca741ab0b3';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    let response = await fetch(url);
    let weather = await response.json();

    return weather;
}

