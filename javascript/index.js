function updateTime (){
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement =  document.querySelector(".date");
let newYorkTimeElement =  document.querySelector(".time");
let newYorkTime = moment().tz("America/new_york");
newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do YYYY");
newYorkTimeElement.innerHTML = `${newYorkTime.format("H:mm:ss")} <small>${newYorkTime.format("a")}</small>`

//setInterval(updateNewYorskTime, 1000);

//lisbon
//function updateLisbonTime () {
    let lisbonElement = document.querySelector("#lisbon");
    if (lisbonElement) {
      let lisbonDateElement = lisbonElement.querySelector(".date");
      let lisbonTimeElement = lisbonElement.querySelector(".time");
      let lisbonTime = moment().tz("Europe/Lisbon");
  
      lisbonDateElement.innerHTML = lisbonTime.format("MMMM	Do YYYY");
      lisbonTimeElement.innerHTML = lisbonTime.format(
        "H:mm:ss [<small>]A[</small>]"
      );
    }
  
}

 
function updateCity(event) {

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess()
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);