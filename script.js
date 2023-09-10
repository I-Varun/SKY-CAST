const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '70c883e3f1msh66254b96d77c5d8p177001jsnea6ee2698827',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let lastSearchedCity = 'Kolkata';

const getWeather =(city) =>{

    if (!city && lastSearchedCity) {
        city = lastSearchedCity; 
      }

cityName.innerHTML = city;
lastSearchedCity = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options).then(response => response.json())
    .then((response) => {
        console.log(response);

    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
    }) .catch (err => console.error(err));   
}



submit.addEventListener("click" , (e)=>{

e.preventDefault()
getWeather(city.value)
})

getWeather(lastSearchedCity)

const updateWeatherData = (city, row) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const cells = row.getElementsByTagName('td');
        cells[0].textContent = response.cloud_pct;
        cells[1].textContent = response.temp;
        cells[2].textContent = response.feels_like;
        cells[3].textContent = response.humidity;
        cells[4].textContent = response.min_temp;
        cells[5].textContent = response.max_temp;
        cells[6].textContent = response.wind_speed;
        cells[7].textContent = response.wind_degrees;
        cells[8].textContent = response.sunrise;
        cells[9].textContent = response.sunset;
      })
      .catch((err) => console.error(err));
  };
  
  // Get all the rows in the table (excluding the header row)
  const tableRows = document.querySelectorAll('tbody tr');
  
  // Loop through the rows and update weather data for each city
  tableRows.forEach((row) => {
    const cityName = row.querySelector('th').textContent;
    updateWeatherData(cityName, row);
  });
// Call the async function to execute the code



