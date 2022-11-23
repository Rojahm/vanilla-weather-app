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
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());

function showTempreture(response) {
  console.log(response.data);
}
let apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
let apiUrl = "https://api.shecodes.io/weather/v1/current";
let apiQuery = "Lisbon";
axios.get(`${apiUrl}?query=${apiQuery}&key=${apiKey}`).then(showTempreture);
