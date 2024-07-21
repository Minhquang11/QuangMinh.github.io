let ESPplayers = {
    ESP: [
        {
            name: "David Raya",
            age: "28",
            match: "1",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250171278.png"
        },

        {
            name: "Álex Remiro",
            age: "29",
            match: "-",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250066244.png"
        },

        {
            name: "Unai Simón",
            age: "27",
            match: "6",
            position: "Goalkepper",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250076116.png"
        },

        {
            name: "Dani Carvajal",
            age: "32",
            match: "5",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250024448.png"
        },

        {
            name: "Robin Le Normand",
            age: "27",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250112513.png"
        },

        {
            name: "Nacho",
            age: "34",
            match: "4",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/1900122.png"
        },

        {
            name: "Daniel Vivian",
            age: "25",
            match: "2",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250194503.png"
        },


        {
            name: "Alejandro Grimanldo",
            age: "28",
            match: "2",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250042422.png"
        },
        {
            name: "Aymeric Laporte",
            age: "30",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250027046.png"
        },

        {
            name: "Marc Cucurella",
            age: "25",
            match: "6",
            position: "Defender",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250076168.png"
        },
        {
            name: "Mikel Merino",
            age: "28",
            match: "7",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250080572.png"
        },

        {
            name: "Fabián Ruiz",
            age: "28",
            match: "6",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250115436.png"
        },
        {
            name: "Álex Baena",
            age: "22",
            match: "2",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250106963.png"
        },
        {
            name: "Rodri",
            age: "28",
            match: "6",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250082664.png"
        },
        {
            name: "Nico Williams",
            age: "22",
            match: "6",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250163185.png"
        },
        {
            name: "Martin Zubimendi",
            age: "25",
            match: "4",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250143679.png"
        },
        {
            name: "Pedri",
            age: "21",
            match: "4",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250143693.png"
        },
        {
            name: "Mikel Oyarzabal",
            age: "27",
            match: "7",
            position: "Midfielder",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250097180.png"
        },
        {
            name: "Álvaro Morata",
            age: "31",
            match: "7",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250024456.png"
        },
        {
            name: "Joselu",
            age: "34",
            match: "2",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250005193.png"
        },
        {
            name: "Dani Olmo",
            age: "26",
            match: "6",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250081720.png"
        },
        {
            name: "Ferran Torres",
            age: "24",
            match: "5",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250088320.png"
        },
        {
            name: "Lamine Yamal",
            age: "17",
            match: "7",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250176450.png"
        },
        {
            name: "Jesús Navas",
            age: "38",
            match: "3",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/69173.png"
        },
        {
            name: "Fermín López",
            age: "21",
            match: "1",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250164780.png"
        },
        {
            name: "Ayoze Pérez",
            age: "30",
            match: "1",
            position: "Forwards",
            image: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250075625.png"
        },



    ]
}
const playerInfoContainer = document.getElementById("player-infor");

ESPplayers.ESP.forEach(player => {
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