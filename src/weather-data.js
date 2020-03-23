const apiKey = "cac96e4f3c9bcf5366ecbcc47bd0dcf2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const getWeatherData = ( location, tempPreferences ) => {
  const url = `${apiUrl}q=${location}&appid=${apiKey}&units=${tempPreferences}`;

  fetch(url)
    .then(response => {
      if (! response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => formatData(data))
    .then( formatedData => updateDom(formatedData))
    .catch(err => {
      console.log(err);
    })
}

const formatData = data => {
  const weatherObj = {};

  weatherObj.city = data.name;
  weatherObj.weather = data.weather[0].main;
  weatherObj.description = data.weather[0].description;
  weatherObj.icon = data.weather[0].icon;
  weatherObj.mainTemp = data.main.temp;
  weatherObj.feelsLikeTemp = data.main.feels_like;

  return weatherObj;
}

const getWeatherIconUrl = iconName => {
  const icon = `${iconName}@2x.png`;
  const url = "http://openweathermap.org/img/wn/" + icon;

  return url;
};

const updateDom = weatherObj => {
  //const weatherCard = document.querySelector(".weather-card");

  const cardTitle = document.querySelector(".weather-card__city");
  cardTitle.textContent = weatherObj.city;

  const cardIcon = document.querySelector(".weather-card__icon");
  cardIcon.src = getWeatherIconUrl( weatherObj.icon);

  const cardWeather = document.querySelector(".weather-card__main");
  cardWeather.textContent = weatherObj.weather

  const cardDescription = document.querySelector(".weather-card__desc");
  cardDescription.textContent = weatherObj.description;

  const weatherCardTemp = document.querySelector(".weather-card__temp");
  weatherCardTemp.textContent = weatherObj.mainTemp;

  const weatherCardFeelsLikeTemp = document.querySelector(".weather-card__feels-like-temp");
  weatherCardFeelsLikeTemp.textContent = weatherObj.feelsLikeTemp;
}

export { getWeatherData };
