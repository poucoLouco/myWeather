async function getWeather(){




try{
let city =document.getElementById('zipcode').value;
let key = 'd72729578543cfc435344f99b226b1c9'
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

await fetch(url)
.then((weather) => {return weather.json()})
.then(displayData);


}

catch{
    console.log('SORRY, SOMTHING WENT WRONG.TRY AGAIN PLEASE');
}
}
function displayData(weather){
    let mydiv = document.getElementById('w');
console.log(weather);

let nameCity=(weather.name).toUpperCase();

let tempFar =(((weather.main.temp) * 9/5) + 32).toFixed(3);
let tempFarMin = (((weather.main.temp_min) * 9/5) + 32).toFixed(3);
let tempFarMax = (((weather.main.temp_max) * 9/5) + 32).toFixed(3);
let tempFeel = (((weather.main.feels_like) * 9/5) + 32).toFixed(3);

let temp= "TEMPERATURE: " + tempFar + " F";
let mintemp="MIN TEMP: " +  tempFarMin + " F";
let maxtemp="MAX TEMP: " +  tempFarMax + " F";
let tempfeel= "FEELS LIKE: " + tempFeel + " F";

let windSpeed = weather.wind.speed;
let windMPH = 2.236937 * windSpeed;
let twoDecimalPlacesWind="WIND SPEED: " + windMPH.toFixed(2) + " mph"

let getIcon=weather.weather[0].icon;
let weathericon = `<img src="http://openweathermap.org/img/w/${getIcon}.png"/>`;





mydiv.innerHTML=
`<div class="card" style="width: 18rem;">
    <img class="card-img-top h-50 w-50" ${weathericon}
    <div class="card-body">
      <h5 class="card-title">${nameCity}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ${temp}</li>
      <li class="list-group-item">${tempfeel}</li>
      <li class="list-group-item">${mintemp}</li>
      <li class="list-group-item">${maxtemp}</li>
      <li class="list-group-item">${twoDecimalPlacesWind}</li>
    </ul>
  </div>
</body>
</html>`
}