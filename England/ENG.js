let data = {
  ENG: [
    {
      id: "2",
      flag: "https://img.uefa.com/imgml/flags/240x240/ENG.png",
      name: "ENGLAND",
      match_played: "7",
      match_won: "3",
      match_drawn: "3",
      match_lost: "1",
      goals: "8",
      goal_conceded: "6",
      possession: "55.72%",
      passing_accuracy: "89%",
      balls_recovered: "252",
      tackles_won: "38",
      clean_sheet: "2",
      saves: "17",
      distance_covered: "846.06",
      yellow_card: "14",
      red_card: "0",
    },
  ],
};

for (const items of data.ENG) {
  // Create the main container

  // Create the title section
  let title = document.createElement("div");
  title.classList.add("title");

  let flag = document.createElement("div");
  flag.classList.add("flag");
  let flagImage = document.createElement("img");
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
