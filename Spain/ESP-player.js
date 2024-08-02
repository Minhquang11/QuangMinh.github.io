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

htmlString += ` <div class="all">
  <div class="nationname">
    <img
      class="nationflag"
      src="${dataNew.flag}"
    />
    alt="${nameTeam.name}" />
    <h1 class="flagname">${dataNew.name}</h1>
  </div>
    <div id="player-infor"></div>
  </div>`;

document.getElementById("information").innerHTML = htmlString;

const playerInfoContainer = document.getElementById("player-infor");

for (let index = 0; index < nameTeam.infoplayer.length; index++) {
  const player = nameTeam.infoplayer[index];
  console.log(player);
  const card = document.createElement("div");
  card.classList.add("player-container");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-players");

  const image = document.createElement("img");
  image.setAttribute("src", player.image);
  image.setAttribute("alt", player.name);

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  const container = document.createElement("div");
  container.classList.add("container");

  const name = document.createElement("h5");
  name.classList.add("players-name");
  name.innerText = player.name;

  container.appendChild(name);
  card.appendChild(container);

  playerInfoContainer.appendChild(card);
}
