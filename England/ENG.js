let ENGplayers = {
    ENG: [
        {
            name: "Jordan Pickford",
            age: "30",
            match: "7",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250024791.png"
        },

        {
            name: "Aaron Ramsdale",
            age: "26",
            match: "-",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250105912.png"
        },

        {
            name: "Dean Henderson",
            age: "27",
            match: "-",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250064823.png"
        },

        {
            name: "Kyle Walker",
            age: "34",
            match: "7",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250010259.png"
        },

        {
            name: "Luke Shaw",
            age: "29",
            match: "3",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250042705.png"
        },

        {
            name: "John Stones",
            age: "30",
            match: "7",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250064233.png"
        },

        {
            name: "Marc Guéhi",
            age: "24",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250086928.png"
        },


        {
            name: "Trent Alexander-Arnold",
            age: "25",
            match: "4",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250076357.png"
        },
        {
            name: "Kieran Trippier",
            age: "33",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250000919.png"
        },

        {
            name: "Ezri Konsa",
            age: "26",
            match: "3",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250123068.png"
        },
        {
            name: "Lewis Dunk",
            age: "32",
            match: "-",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250021043.png"
        },

        {
            name: "Joe Gomez",
            age: "27",
            match: "-",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250058215.png"
        },
        {
            name: "Declan Rice",
            age: "25",
            match: "7",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250083732.png"
        },
        {
            name: "Jude Bellingham",
            age: "21",
            match: "7",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250128377.png"
        },
        {
            name: "Phil Foden",
            age: "24",
            match: "7",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250101534.png"
        },
        {
            name: "Conor Gallagher",
            age: "24",
            match: "5",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250113103.png"
        },
        {
            name: "Cole Palmer",
            age: "22",
            match: "5",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250124282.png"
        },
        {
            name: "Adam Wharton",
            age: "20",
            match: "-",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250178736.png"
        },
        {
            name: "Kobbie Mainoo",
            age: "19",
            match: "6",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250165175.png"
        },
        {
            name: "Bukayo Saka",
            age: "22",
            match: "7",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250106939.png"
        },
        {
            name: "Harry Kane",
            age: "30",
            match: "7",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250016833.png"
        },
        {
            name: "Ivan Toney",
            age: "28",
            match: "3",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250178523.png"
        },
        {
            name: "Anthony Gordon",
            age: "23",
            match: "1",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250117036.png"
        },
        {
            name: "Ollie Watkins",
            age: "28",
            match: "3",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250150887.png"
        },
        {
            name: "Jarrod Bowen",
            age: "27",
            match: "2",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250163877.png"
        },
        {
            name: "Eberechi Eze",
            age: "26",
            match: "3",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250134376.png"
        },



    ]
}
const playerInfoContainer = document.getElementById("player-infor");

ENGplayers.ENG.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-container");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-players");

    const image = document.createElement("img");
    image.setAttribute("src", player.image);

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
});