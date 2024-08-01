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
    { name: "Gaming", href: "#" }
];

navItems.forEach(item => {
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
