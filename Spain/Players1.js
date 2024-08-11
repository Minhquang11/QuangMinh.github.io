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