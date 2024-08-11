let data = {
  ESP: [
    {
      id: "1",
      name: "Spain",
      flag: "https://img.uefa.com/imgml/flags/240x240/ESP.png",
      match_played: "7",
      match_won: "7",
      match_drawn: "0",
      match_lost: "0",
      goals: "15",
      goal_conceded: "4",
      possession: "58.15%",
      passing_accuracy: "90.14%",
      balls_recovered: "290",
      tackles_won: "36",
      clean_sheet: "3",
      saves: "18",
      distance_covered: "832.65",
      yellow_card: "16",
      red_card: "1",
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
  flagImage.classList.add("flagImg");
  flagImage.setAttribute("src", items.flag);
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
    { number: items.match_played, label: "Matches played" },
    { number: items.match_won, label: "Won" },
    { number: items.match_lost, label: "Lost" },
    { number: items.match_drawn, label: "Drawn" },
  ];

  let statsData = [
    [
      { number: items.goals, label: "Goals" },
      { number: items.goal_conceded, label: "Goals conceded" },
      { number: items.possession, label: "Possession" },
    ],
    [
      { number: items.passing_accuracy, label: "Passing accuracy" },
      { number: items.balls_recovered, label: "Balls recovered" },
      { number: items.tackles_won, label: "Tackles won" },
    ],
    [
      { number: items.clean_sheet, label: "Clean sheet" },
      { number: items.saves, label: "Saves" },
      { number: items.distance_covered, label: "Distance covered" },
    ],
    [
      { number: items.yellow_card, label: "Yellow card" },
      { number: items.red_card, label: "Red card" },
    ],
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

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

for (const item of data.ESP) {
  let FlagName = document.createElement("div");
  FlagName.classList.add("title");

  let flag = document.createElement("div");
  flag.classList.add("flag");
  let flagImage = document.createElement("img");
  flagImage.classList.add("flagImg");
  flagImage.setAttribute("src", item.flag);
  flagImage.setAttribute("alt", "England Flag");
  flag.appendChild(flagImage);

  let name = document.createElement("div");
  name.classList.add("name");
  let teamName = document.createElement("h1");
  teamName.innerText = item.name;
  name.appendChild(teamName);

  FlagName.appendChild(flag)
  FlagName.appendChild(name)
  
  document.getElementById("title").appendChild(FlagName);
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
