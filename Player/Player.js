const url = 'https://euro-20242.p.rapidapi.com/players';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4b4c403403msh773666ff3fef4cfp18cab5jsnfbb2aa3b82af',
                'x-rapidapi-host': 'euro-20242.p.rapidapi.com'
            }
        };

        async function fetchPlayers() {
            try {
                const response = await fetch(url, options);
                const result = await response.json(); // Chuyển đổi kết quả thành JSON
                console.log(result);
                displayPlayers(result);
            } catch (error) {
                console.error(error);
            }
        }

        function displayPlayers(players) {
            const playersDiv = document.getElementById('players');
            playersDiv.innerHTML = ''; // Xóa nội dung cũ

            players.forEach(player => {
                const playerDiv = document.createElement('div');
                playerDiv.className = 'player';
                playerDiv.innerHTML = `
                    <h2>${player.name}</h2>
                    <p><strong>Position:</strong> ${player.position}</p>
                    <p><strong>Age:</strong> ${player.age}</p>
                    <p><strong>Nationality:</strong> ${player.nationality}</p>
                    <p><strong>Goals:</strong> ${player.goals}</p>
                    <p><strong>Club:</strong> ${player.club}</p>
                `;
                playersDiv.appendChild(playerDiv);
            });
        }

        // Gọi hàm fetchPlayers khi trang load
        fetchPlayers();