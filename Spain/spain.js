import { data } from "./ESP.js";
import { players } from "./ESP.js";

// fitter id
console.log(data);
const query = window.location.search;
const urlID = new URLSearchParams(query);

const id = urlID.get("id");
console.log(id);

const dataNew = data.find(function (item) {
  return item.id === id;
});

const nameTeam = players.find(function (item) {
  return item.id === id;
});

console.log(nameTeam);

let htmlString = "";

htmlString += `<div class="nationname">
    <img
      class="nationflag"
      src="${dataNew.flag}"
      alt=""
    />
    <h1 class="flagname">${dataNew.name}</h1>
  </div>
  <div class="KEYSTATS">
    <h1>KEY STATS</h1>
    <div class="STATS">
      <div class="ovr">
        <div class="match-played">
          <h2>${dataNew.match_played}</h2>
          <h3>Matches played</h3>
        </div>
        <div class="ovr-stats">
          <div class="wons">
            <h3>${dataNew.match_won}</h3>
            <p>Won</p>
          </div>
          <div class="wons">
            <h3>${dataNew.match_drawn}</h3>
            <p>Drawn</p>
          </div>
          <div class="wons">
            <h3>${dataNew.match_lost}</h3>
            <p>Lost</p>
          </div>
        </div>
      </div>

      <div class="stats">
        <div class="stat-number">
          <h3>${dataNew.goals}</h3>
          <h4>Goals</h4>
        </div>
        <div class="stat-number">
          <h3>${dataNew.balls_recovered}</h3>
          <h4>Balls recovered</h4>
        </div>
        <div class="stat-number">
          <h3>${dataNew.distance_covered}</h3>
          <h4>Distance covered (km)</h4>
        </div>
      </div>
      <div class="stats">
        <div class="stat-number">
          <h3>${dataNew.goal_conceded}</h3>
          <h4>Goals conceded</h4>
        </div>
        <div class="stat-number">
          <h3>${dataNew.tackles_won}</h3>
          <h4>Tackles won</h4>
        </div>
        <div class="stat-number">
          <h3>${dataNew.yellow_card}</h3>
          <h4>Yellow cards</h4>
        </div>
      </div>
      <div class="stats">
        <div class="stat-number">
          <h3>${dataNew.possession}</h3>
          <h4>Possession (%)</h4>
        </div>
        <div class="stat-number">
          <h3>${dataNew.clean_sheet}</h3>
          <h4>Clean sheets</h4>
        </div>
        <div class="stat-number">
          <h3>${dataNew.red_card}</h3>
          <h4>Red cards</h4>
        </div>
      </div>
      <div class="stats">
        <div class="stat-number">
          <h3>${dataNew.saves}</h3>
          <h4>Saves</h4>
        </div>
        <div class="stat-number">
          <h3>${dataNew.passing_accuracy}</h3>
          <h4>Passing accuracy (%)</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="news-container">
    <h1>Players</h1>
    <div class="news-item">
      <h2>${nameTeam.infoplayer[0].name}</h2>
    </div>
    <div class="news-item">
      <h2>${nameTeam.infoplayer[1].name}</h2>
    </div>
    <div class="news-item">
      <h2>${nameTeam.infoplayer[2].name}z</h2>
    </div>
    <div class="news-item">
      <h2>${nameTeam.infoplayer[3].name}</h2>
    </div>
    <div class="news-item">
      <h2>${nameTeam.infoplayer[4].name}</h2>
    </div>
    <div class="seemore">
      <p onClick="navigationNewPageSeeMore(${id})">See more</p>
    </div>
  </div>`;
document.getElementById("information").innerHTML = htmlString;

function navigationNewPageSeeMore(id) {
  window.location.href = `./ESP-player.html?id=${id}`;
}
window.navigationNewPageSeeMore = navigationNewPageSeeMore;
