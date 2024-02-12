const API_KEY = "12c0bee66e2c3ef12c20aa2e3ce6a955";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".city");
      const temp = document.querySelector(".temp");
      const weather = document.querySelector(".cloud");
      const iconSection = document.querySelector(".icon");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
      const icon = data.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      iconSection.setAttribute("src", iconURL);
    });
}
function onGeoError() {
  alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
