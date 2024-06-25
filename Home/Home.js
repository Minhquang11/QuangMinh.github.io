async function fetchSongs() {
    const url = 'https://youtube-music-api3.p.rapidapi.com/home?gl=ID';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4b4c403403msh773666ff3fef4cfp18cab5jsnfbb2aa3b82af',
            'x-rapidapi-host': 'youtube-music-api3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Chuyển đổi kết quả thành JSON
        console.log(result);
        displaySongs(result);
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

function displaySongs(data) {
    const songsDiv = document.getElementById('songs');
    songsDiv.innerHTML = ''; // Xóa nội dung cũ
    var array = Array.from(data)

    array.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'song';
        songDiv.innerHTML = `
            <h2>${song.title}</h2>
            <p><strong>Artist:</strong> ${song.artist}</p>
            <p><strong>Album:</strong> ${song.album}</p>
            <p><strong>Views:</strong> ${song.views}</p>
            <p><strong>Duration:</strong> ${song.duration}</p>
        `;
        songsDiv.appendChild(songDiv);
    });
}

// Gọi hàm fetchSongs khi trang load
fetchSongs();