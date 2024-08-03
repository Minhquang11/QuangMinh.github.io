// Create the navbar
let navbar = document.createElement("nav");
navbar.classList.add("navbar", "navbar-expand-lg");

// Create the container
let container = document.createElement("div");
container.classList.add("container-fluid");

// Create the brand
let brand = document.createElement("p");
brand.classList.add("navbar-brand");
brand.style.color = "white";
brand.innerText = "UEFA.com";
container.appendChild(brand);

// Create the toggler button
let toggler = document.createElement("button");
toggler.classList.add("navbar-toggler");
toggler.setAttribute("type", "button");
toggler.setAttribute("data-bs-toggle", "collapse");
toggler.setAttribute("data-bs-target", "#navbarNav");
toggler.setAttribute("aria-controls", "navbarNav");
toggler.setAttribute("aria-expanded", "false");
toggler.setAttribute("aria-label", "Toggle navigation");

// Create the toggler icon
let togglerIcon = document.createElement("span");
togglerIcon.classList.add("navbar-toggler-icon");
toggler.appendChild(togglerIcon);

container.appendChild(toggler);

// Create the collapse div
let collapseDiv = document.createElement("div");
collapseDiv.classList.add("collapse", "navbar-collapse");
collapseDiv.setAttribute("id", "navbarNav");

// Create the nav list
let navList = document.createElement("ul");
navList.classList.add("navbar-nav");

let navItems = [
  { name: "Matches", href: "#" },
  { name: "Groups", href: "#" },
  { name: "Video", href: "#" },
  { name: "Stats", href: "#" },
  { name: "Gaming", href: "#" },
];

navItems.forEach((item) => {
  let navItem = document.createElement("li");
  navItem.classList.add("nav-item");

  let navLink = document.createElement("a");
  navLink.classList.add("nav-link");
  navLink.setAttribute("href", item.href);
  navLink.innerText = item.name;

  navItem.appendChild(navLink);
  navList.appendChild(navItem);
});

collapseDiv.appendChild(navList);
container.appendChild(collapseDiv);

// Create the buttons
let registerButton = document.createElement("button");
registerButton.innerText = "Đăng kí";

let loginButton = document.createElement("button");
loginButton.innerText = "Đăng nhập";

let buttonContainer = document.createElement("div");
buttonContainer.appendChild(registerButton);
buttonContainer.appendChild(loginButton);

container.appendChild(buttonContainer);

// Append the container to the navbar
navbar.appendChild(container);

// Append the navbar to the element with ID "nav-container"
document.getElementById("nav-container").appendChild(navbar);

/// body
const nationsFinal = [
  {
    id: "1",
    name: "Spain",
    flagUrl: "https://img.uefa.com/imgml/flags/240x240/ESP.png",
  },
  {
    id: "2",
    name: "England",
    flagUrl: "https://img.uefa.com/imgml/flags/240x240/ENG.png",
  },

];

const nationsSemi = [
  {
    id: "3",
    name: "France",
    flagUrl: "https://img.uefa.com/imgml/flags/240x240/FRA.png",
  },
  {
    id: "4",
    name: "Netherlands",
    flagUrl: "https://img.uefa.com/imgml/flags/240x240/NED.png",
  },
];

const nationsQuater = [
  {
    id: "5",
    name: "Germany",
    flagUrl: "https://img.uefa.com/imgml/flags/240x240/GER.png",
  },
  {
    id: "6",
    name: "Portugal",
    flagUrl: "https://img.uefa.com/imgml/flags/240x240/POR.png",
  },
  {
    id: "7",
    name: "Switzerland",
    flagUrl: "https://img.uefa.com/imgml/flags/240x240/SUI.png",
  },
  {
    id: "8",
    name: "Türki̇ye",
    flagUrl: "https://img.uefa.com/imgml/flags/240x240/TUR.png",
  },
];


let htmlString = "";
for (let i = 0; i < nationsFinal.length; i++) {
  const product = nationsFinal[i];
  htmlString += `
    <div class="nation" onClick="navigationNewPage('${product.id}')">
      <img src="${product.flagUrl}" alt="" />
      <p>${product.name}</p>
    </div>
  `;
}

let htmlString1 = "";
for (let i = 0; i < nationsSemi.length; i++) {
  const product = nationsSemi[i];
  htmlString1 += `
    <div class="nation" onClick="navigationNewPage('${product.id}')">
      <img src="${product.flagUrl}" alt="" />
      <p>${product.name}</p>
    </div>
  `;
}

let htmlString2 = "";
for (let i = 0; i < nationsQuater.length; i++) {
  const product = nationsQuater[i];
  htmlString2 += `
    <div class="nation" onClick="navigationNewPage('${product.id}')">
      <img src="${product.flagUrl}" alt="" />
      <p>${product.name}</p>
    </div>
  `;
}

document.getElementById("nations-container").innerHTML = htmlString;
document.getElementById("nations-container1").innerHTML = htmlString1;
document.getElementById("nations-container2").innerHTML = htmlString2;


function navigationNewPage(id) {
  window.location.href = `../Spain/ESP.html?id=${id}`;
}

window.navigationNewPage = navigationNewPage;
