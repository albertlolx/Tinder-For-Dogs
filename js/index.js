import Dog from "./Dog.js";
import dogsData from "./data.js";

let currentDog;
let notificationCount = 0;

function renderApp() {
    fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
        .then((response) => response.json())
        .then((data) => {
            const namesLength = dogsData.names.length;
            const bioLength = dogsData.bio.length;

            const dogObject = {
                name: dogsData.names[Math.floor(Math.random() * (namesLength - 1))],
                avatar: data[0].url,
                bioHTML: dogsData.bio[Math.floor(Math.random() * (bioLength - 1))]
            }

            currentDog = new Dog(dogObject);
            document.querySelector(".placeholder").innerHTML = currentDog.getDefultAppHTML();
        })
}

renderApp();

let nopeBtn = document.getElementById("nope");
let likeBtn = document.getElementById("like");
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notification-text");

nopeBtn.addEventListener("click", () => {
    document.querySelector(".placeholder").innerHTML = currentDog.getDislikedAppHTML();
    setTimeout(() => renderApp(), 1000);
});

likeBtn.addEventListener("click", () => {
    notification.style.display = "block";
    notificationCount++;
    notificationText.textContent = notificationCount;

    document.querySelector(".placeholder").innerHTML = currentDog.getLikedAppHTML();
    setTimeout(() => renderApp(), 1000);
});