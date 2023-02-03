const greetingsForm = document.querySelector(".greetings-form");
const greetingsInput = document.querySelector(".greetings-input");
const firstGreeting = document.querySelector(".first-greetings-region");
const contents = document.querySelector(".contents");
const greetings = document.querySelector(".greetings");
const logoutButton = document.querySelector(".logout-button");

function handleGreetingsForm(event) {
    event.preventDefault();
    const inputValue = greetingsInput.value;
    greetingsInput.value = "";
    localStorage.setItem("username", inputValue);
    window.location.reload();
}

function handleLogout() {
    localStorage.removeItem("username");
    window.location.reload();
}

const username = localStorage.getItem("username");

if (username === null) {
    firstGreeting.classList.remove("hidden");
    contents.classList.add("hidden");
    greetingsForm.addEventListener("submit", handleGreetingsForm);
}
else {
    firstGreeting.classList.add("hidden");
    contents.classList.remove("hidden");
    greetings.innerText = `Hi! ${username}.`;
    logoutButton.addEventListener("click", handleLogout);
}
