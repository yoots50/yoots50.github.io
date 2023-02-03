const clock = document.querySelector(".clock");

function mainClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}`;
}

mainClock()
setInterval(mainClock, 100);