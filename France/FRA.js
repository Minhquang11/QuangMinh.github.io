let FRAplayers = {
    FRA: [
        {
            name: "Brice Samba",
            age: "30",
            match: "-",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250059123.png"
        },

        {
            name: "Mike Maignan",
            age: "29",
            match: "6",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250042780.png"
        },

        {
            name: "Alphonse Areola",
            age: "31",
            match: "-",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250013997.png"
        },

        {
            name: "Benjamin Pavard",
            age: "28",
            match: "-",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250081921.png"
        },

        {
            name: "Ferland Mendy",
            age: "29",
            match: "-",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250112803.png"
        },

        {
            name: "Dayot Upamecano",
            age: "25",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250079545.png"
        },

        {
            name: "Jules Koundé",
            age: "25",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250096309.png"
        },


        {
            name: "William Saliba",
            age: "23",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250127439.png"
        },
        {
            name: "Jonathan Clauss",
            age: "31",
            match: "-",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250171228.png"
        },

        {
            name: "Theo Hernández",
            age: "26",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250076126.png"
        },
        {
            name: "Ibrahima Konaté",
            age: "25",
            match: "-",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250091013.png"
        },

        {
            name: "Eduardo Camavinga",
            age: "21",
            match: "4",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250128270.png"
        },
        {
            name: "Antoine Griezmann",
            age: "33",
            match: "6",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250019498.png"
        },
        {
            name: "Aurélien Tchouameni",
            age: "24",
            match: "5",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250105244.png"
        },
        {
            name: "N'Golo Kanté",
            age: "33",
            match: "6",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250097248.png"
        },
        {
            name: "Adrien Rabiot",
            age: "29",
            match: "5",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250053905.png"
        },
        {
            name: "Warren Zaïre-Emery",
            age: "18",
            match: "-",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250153849.png"
        },
        {
            name: "Youssouf Fofana",
            age: "25",
            match: "3",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250132399.png"
        },
        {
            name: "Olivier Giroud",
            age: "37",
            match: "4",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250020851.png"
        },
        {
            name: "Kylian Mbappé",
            age: "25",
            match: "5",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250076574.png"
        },
        {
            name: "Ousmane Dembélé",
            age: "27",
            match: "5",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250066886.png"
        },
        {
            name: "Randal Kolo Muani",
            age: "25",
            match: "5",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250146926.png"
        },
        {
            name: "Marcus Thuram",
            age: "26",
            match: "4",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250068805.png"
        },
        {
            name: "Kingsley Coman",
            age: "28",
            match: "1",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250054949.png"
        },
        {
            name: "Bradley Barcola",
            age: "21",
            match: "3",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250134138.png"
        },

    ]
}
const playerInfoContainer = document.getElementById("player-infor");

FRAplayers.FRA.forEach(player => {
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