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

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
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