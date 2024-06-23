document.addEventListener('DOMContentLoaded', async function () {
    const url = 'https://euro-20242.p.rapidapi.com/players';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4b4c403403msh773666ff3fef4cfp18cab5jsnfbb2aa3b82af',
            'x-rapidapi-host': 'euro-20242.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayPlayers(data.players);
    } catch (error) {
        console.error('Error fetching data:', error);
        const playerList = document.getElementById('player-list');
        playerList.innerHTML = '<p>Failed to fetch players. Please try again later.</p>';
    }

    function displayPlayers(players) {
        const playerList = document.getElementById('player-list');
        playerList.innerHTML = '';
        players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('player');

            const playerName = document.createElement('div');
            playerName.classList.add('player-name');
            playerName.textContent = `${player.firstname} ${player.lastname}`;

            const playerInfo = document.createElement('div');
            playerInfo.classList.add('player-info');
            playerInfo.textContent = `Team: ${player.team.name}, Position: ${player.position}`;

            playerDiv.appendChild(playerName);
            playerDiv.appendChild(playerInfo);

            playerList.appendChild(playerDiv);
        });
    }
});
