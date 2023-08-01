// challenge 1
let input = document.querySelector(".searchBox");
let newCity = document.querySelector(".cityName");
let degreeNumber = document.querySelector(".degreeNumber");

function changeCity(event) {
  event.preventDefault();
  console.log(input.value);
  newCity.innerHTML = input.value;
}

let enteredCity = document.querySelector("#search");
enteredCity.addEventListener("submit", changeCity);

// challenge 2
let apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";

function currentWeather(response) {
  let currentTemp = Math.round(response.data.main.temp);
  degreeNumber.innerHTML = `${currentTemp}`;
}

function apichanger(event) {
  event.preventDefault();
  let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`;
  axios.get(apiWeather).then(currentWeather);
}
enteredCity.addEventListener("submit", apichanger);

// challenge 3

function updateInfo(response) {
  newCity.innerHTML = `${response.data.name}`;
  let newTemp = Math.round(response.data.main.temp);
  degreeNumber.innerHTML = `${newTemp}`;
}

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(updateInfo);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let currentLocButton = document.querySelector(".locButton");
currentLocButton.addEventListener("click", getCurrentPosition);
