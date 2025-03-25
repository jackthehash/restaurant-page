import "./style.css";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

const hp = document.createElement("p");
const hdiv = document.createElement("div");
hp.textContent = "The Jack Restaurant";
hdiv.textContent = "The best restaurant in the area!";
content.appendChild(hp);
content.appendChild(hdiv);

const mt = document.createElement("p");
const mp1 = document.createElement("p");
const mp2 = document.createElement("p");
const mp3 = document.createElement("p");
const mp4 = document.createElement("p");
const mp5 = document.createElement("p");

mt.textContent = "WAFFLES";
mp1.textContent = "Potato Waffle  - $10";
mp2.textContent = "Soft Waffle  - $10";
mp3.textContent = "Toaster Waffle  - $10";
mp4.textContent = "Chocolate Waffle  - $10";
mp5.textContent = "Honey Waffle  - $10";

const ct = document.createElement("p");
const cp1 = document.createElement("p");
const cp2 = document.createElement("p");
const cp3 = document.createElement("p");
const cp4 = document.createElement("p");

ct.textContent = "Contact here";
cp1.textContent = "Jack";
cp2.textContent = "Phone: 2312-2312-2312";
cp3.textContent = "Email: jack@test.com";
cp4.textContent = "Location: Here";

home.style.backgroundColor = "darkgrey";

home.addEventListener("click", () => {
    home.style.backgroundColor = "darkgrey";
    menu.style.backgroundColor = "lightgrey";
    contact.style.backgroundColor = "lightgrey";
    content.innerHTML = "";
    content.appendChild(hp);
    content.appendChild(hdiv);
})

menu.addEventListener("click", () => {
    home.style.backgroundColor = "lightgrey";
    menu.style.backgroundColor = "darkgrey";
    contact.style.backgroundColor = "lightgrey";
    content.innerHTML = "";
    content.appendChild(mt);
    content.appendChild(mp1);
    content.appendChild(mp2);
    content.appendChild(mp3);
    content.appendChild(mp4);
    content.appendChild(mp5);
})

contact.addEventListener("click", () => {
    home.style.backgroundColor = "lightgrey";
    menu.style.backgroundColor = "lightgrey";
    contact.style.backgroundColor = "darkgrey";
    content.innerHTML = "";
    content.appendChild(ct);
    content.appendChild(cp1);
    content.appendChild(cp2);
    content.appendChild(cp3);
    content.appendChild(cp4);
})