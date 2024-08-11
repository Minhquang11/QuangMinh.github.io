let data = {
  ESP: [
    {
      id: "1",
      name: "David Raya",
      age: "28",
      match: "1",
      position: "Goalkeeper",
      image:
        "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250171278.png",
      club_number: "22",
      nation_number: "1",
      country: "Spain",
      date_of_birth: "15/9/1995 (28)",
      match_played: "1",
      minutes_played: "90",
      goals: "0",
      saves: "4",
      clean_sheet: "1",
      passing_accuracy: "92%",
      top_speed: "27.4",
      distance_covered: "5.92",
      yellow_card: "0",
      red_card: "0",
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
    [
      { number: items.match_played, label: "Match played" },
      { number: items.minutes_played, label: "Minutes played" },
      { number: items.goals, label: "Goal" },
    ],
    [
      { number: items.passing_accuracy, label: "Passing accuracy" },
      { number: items.clean_sheet, label: "Clean sheet" },
      { number: items.top_speed, label: "Top speed (km/h)" },
    ],
    [
      { number: items.distance_covered, label: "Distance covered" },
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
