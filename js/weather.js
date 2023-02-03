const API_KEY = "73da16dcb3135b0bd5d95dee35e40081";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector(".city");
        const weather = document.querySelector(".weather");
        const temperature = document.querySelector(".temperature");
        city.innerHTML = `City: ${data.name}`;
        weather.innerHTML = `Weather: ${data.weather[0].main}`;
        temperature.innerHTML = `Temp: ${data.main.temp}'C`;
    });
}

function onGeoFail() {
    alert("Failed to find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);