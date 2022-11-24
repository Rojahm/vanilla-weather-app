// time and date part
let date = new Date();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let days = [
  "Sunday",
  "Monday",
  "Thuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

document.querySelector("#day").innerHTML = days[date.getDay()];
document.querySelector("#month").innerHTML = months[date.getMonth()];
document.querySelector("#year").innerHTML = date.getFullYear();
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = date.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
document.querySelector("#hour").innerHTML = `${hour}:${minute}`;

// temperature part
function showTempreture(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#country").innerHTML = response.data.country;
  document.querySelector("#weather-description").innerHTML =
    response.data.condition.description;
  document.querySelector("#real-feel").innerHTML = Math.round(
    response.data.temperature.feels_like
  );
  document.querySelector("#icon").src = response.data.condition.icon_url;
  document.querySelector("#icon").alt = response.data.condition.icon;
  document.querySelector("#current-tempreture").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.temperature.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#pressure").innerHTML = Math.round(
    response.data.temperature.pressure
  );
}
let apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
let apiUrl = "https://api.shecodes.io/weather/v1/current";
let apiQuery = "Berlin";
axios.get(`${apiUrl}?query=${apiQuery}&key=${apiKey}`).then(showTempreture);

function showCurrentWeather(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
  let apiEndpoint = "https://api.shecodes.io/weather/v1/current";
  let apiUrl = `${apiEndpoint}?lon=${lon}&lat=${lat}&key=${apiKey}`;

  axios.get(apiUrl).then(showTempreture);
}

function searchForCity(event) {
  event.preventDefault();
  let apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
  let apiUrl = "https://api.shecodes.io/weather/v1/current";
  let apiQuery = document.querySelector("#input").value;
  axios.get(`${apiUrl}?query=${apiQuery}&key=${apiKey}`).then(showTempreture);
}
let form = document.querySelector("#search");
form.addEventListener("submit", searchForCity);
function getCurrent() {
  navigator.geolocation.getCurrentPosition(showCurrentWeather);
}

let currentBtn = document.querySelector("#current-weather");
currentBtn.addEventListener("click", getCurrent);

// conversion part
