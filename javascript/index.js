function updateTime() {

let torontoElement = document.querySelector("#toronto");
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");

torontoDateElement.innerHTML = moment().tz("America/Toronto").format("MMMM Do YYYY");
torontoTimeElement.innerHTML = moment().tz("America/Toronto").format("h:mm:ss [<small>]A[</small>]");


let berlinElement = document.querySelector("#berlin");
let berlinDateElement = berlinElement.querySelector(".date");
let berlinTimeElement = berlinElement.querySelector(".time");

berlinDateElement.innerHTML = moment().tz("Europe/Berlin").format("MMMM Do YYYY");
berlinTimeElement.innerHTML = moment().tz("Europe/Berlin").format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);