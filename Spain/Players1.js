let data = {
  ESP: [
    {
      id: "0002",
      name: "Álex Remiro",
      age: "29",
      match: "-",
      position: "Goalkeeper",
      image:
        "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250066244.png",
      club_number: "1",
      nation_number: "13",
      country: "Spain",
      date_of_birth: "24/3/1995 (29)",
      match_played: "",
      minutes_played: "",
      goals: "",
      tackles: "",
      balls_recovered: "",
      passing_accuracy: "",
      top_speed: "",
      distance_covered: "",
      yellow_card: "",
      red_card: "",
    },
  ],
};


for (const items of data.ESP) {
  // Create the main container

  // Create the title section
  let title = document.createElement("div");
  title.classList.add("title");

  let flag = document.createElement("div");
  flag.classList.add("flag");
  let flagImage = document.createElement("img");
  flagImage.setAttribute("src", items.image);
  flagImage.setAttribute("alt", "England Flag");
  flag.appendChild(flagImage);

  let name = document.createElement("div");
  name.classList.add("name");
  let teamName = document.createElement("h1");
  teamName.innerText = items.name;
  name.appendChild(teamName);

  title.appendChild(flag);
  title.appendChild(name);
  information.appendChild(title);

  // Create the overview section
  let overview = document.createElement("div");
  overview.classList.add("overview");

  let overviewTitle = document.createElement("h1");
  overviewTitle.innerText = "Key stats";
  overview.appendChild(overviewTitle);

  // Data for matches and stats
  let matchData = [
    { number: items.club_number, label: "CLUB NUMBER" },
    { number: items.nation_number, label: "NATION NUMBER" },
    { number: items.country, label: "COUNTRY" },
    { number: items.date_of_birth, label: "DATE OF BIRTH" },
  ];

  let statsData = [
    // [
    //   { number: items.match_played, label: "Match played" },
    //   { number: items.minutes_played, label: "Minutes played" },
    //   { number: items.goals, label: "Goal" },
    // ],
    // [
    //   { number: items.passing_accuracy, label: "Passing accuracy" },
    //   { number: items.clean_sheet, label: "Clean sheet" },
    //   { number: items.top_speed, label: "Top speed (km/h)" },
    // ],
    // [
    //   { number: items.distance_covered, label: "Distance covered" },
    //   { number: items.yellow_card, label: "Yellow card" },
    //   { number: items.red_card, label: "Red card" },
    // ],
  ];

  // Function to create match stats
  function createMatchStats(matchData) {
    let match = document.createElement("div");
    match.classList.add("match");

    matchData.forEach((data) => {
      let matchStat = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerText = data.number;
      let h4 = document.createElement("h4");
      h4.innerText = data.label;
      matchStat.appendChild(h3);
      matchStat.appendChild(h4);
      match.appendChild(matchStat);
    });

    overview.appendChild(match);
  }

  // Function to create detailed stats
  function createStats(statsData) {
    statsData.forEach((statGroup) => {
      let stats = document.createElement("div");
      stats.classList.add("stats");

      statGroup.forEach((stat) => {
        let statItem = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = stat.number;
        let h4 = document.createElement("h4");
        h4.innerText = stat.label;
        statItem.appendChild(h3);
        statItem.appendChild(h4);
        stats.appendChild(statItem);
      });

      overview.appendChild(stats);
    });
  }

  // Create and append match stats and detailed stats
  createMatchStats(matchData);
  createStats(statsData);

  // Append the overview to the main container
  information.appendChild(overview);

  // Finally, append the entire structure to a parent element in the document
  document.getElementById("information").appendChild(overview);
}



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
  { name: "Shop", href: "http://127.0.0.1:5500/Shop/Shop.html" },
  {
    name: "Đăng nhập",
    href: "http://127.0.0.1:5500/Register%26Login/login.html",
  },
  {
    name: "Đăng kí",
    href: "http://127.0.0.1:5500/Register%26Login/register.html",
  },
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
// let registerButton = document.createElement("button");
// registerButton.innerText = "Đăng kí";

// let loginButton = document.createElement("button");
// loginButton.innerText = "Đăng nhập";

// let buttonContainer = document.createElement("div");
// buttonContainer.appendChild(registerButton);
// buttonContainer.appendChild(loginButton);

// container.appendChild(buttonContainer);

// Append the container to the navbar
navbar.appendChild(container);

// Append the navbar to the element with ID "nav-container"
document.getElementById("nav-container").appendChild(navbar);
