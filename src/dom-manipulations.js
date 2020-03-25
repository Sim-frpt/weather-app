const updateDom = (weatherObj = {}) => {
  const weatherCard = document.querySelector(".weather-card");

  while (weatherCard.firstChild) {
    weatherCard.removeChild(weatherCard.lastChild);
  }

  // If there is no city name, something went wrong w/ fetching the data
  if ( typeof weatherObj.city === "undefined") {
    addErrorMessage(weatherCard);
    return;
  }

  resetWeatherStylingClasses(weatherCard, ["weather-card"]);

  const weatherCardStylingClass = `weather--${weatherObj.main.toLowerCase()}`;
  weatherCard.classList.add(weatherCardStylingClass);

  const weatherNodes = createDomNodes(weatherObj);

  weatherCard.append(weatherNodes);
}

const addErrorMessage = (container) => {
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = "Something went wrong, please make sure you entered a correct city name in this format: \"London\" or \"London, uk\"";

  container.append(cardTitle);

  return;
}

const createDomNodes = (weatherObj) => {
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add(".weather-card__title");

  cardTitle.textContent = weatherObj.city;

  const cardImgContainer = document.createElement("span");
  cardImgContainer.classList.add("weather-card__img-container");

  const cardIcon = document.createElement("img");
  cardIcon.classList.add("weather-card__icon");
  cardIcon.src = weatherObj.icon;

  cardImgContainer.append( cardIcon );

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("weather-card__desc");
  cardDescription.textContent = weatherObj.description;

  const weatherCardTemp = document.createElement("p");
  weatherCardTemp.classList.add("weather-card__temp");
  weatherCardTemp.textContent = weatherObj.mainTemp + weatherObj.tempUnit;

  const weatherCardFeelsLikeTemp = document.createElement("p");
  weatherCardFeelsLikeTemp.classList.add("weather-card__feels-like-temp");
  weatherCardFeelsLikeTemp.textContent = "Perception: " +  weatherObj.feelsLikeTemp + weatherObj.tempUnit;

  const tempNode = document.createDocumentFragment();

  tempNode.append(
    cardTitle,
    weatherCardTemp,
    weatherCardFeelsLikeTemp,
    cardImgContainer,
    cardDescription,
  );

  return tempNode;
}

const resetWeatherStylingClasses = (element, classesToKeep) => {
  element.className = '';

  classesToKeep.forEach( className => element.classList.add(className));
};

export { updateDom };
