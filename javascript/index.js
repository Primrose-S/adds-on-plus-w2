function updateTime (){
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement =  document.querySelector(".date");
let newYorkTimeElement =  document.querySelector(".time");
let newYorkTime = moment().tz("America/new_york");
newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do YYYY");
newYorkTimeElement.innerHTML = `${newYorkTime.format("h:mm:ss")} <small>${newYorkTime.format("a")}</small>`

//setInterval(updateNewYorskTime, 1000);

//lisbon
//function updateLisbonTime () {
let lisbonElement = document.querySelector("#lisbon");
let lisbonDateElement =  document.querySelector(".dates");
let lisbonTimeElement =  document.querySelector(".times");
let lisbonTime = moment().tz("Europe/Lisbon");
lisbonDateElement.innerHTML = lisbonTime.format("dddd, MMMM Do YYYY");
lisbonTimeElement.innerHTML = `${lisbonTime.format("h:mm:ss")} <small>${lisbonTime.format("A")}</small>`

}
setInterval(updateTime, 1000);