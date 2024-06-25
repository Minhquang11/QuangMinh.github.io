import fetch from 'node-fetch';

const url = 'https://euro-20242.p.rapidapi.com/teams';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4b4c403403msh773666ff3fef4cfp18cab5jsnfbb2aa3b82af',
        'x-rapidapi-host': 'euro-20242.p.rapidapi.com'
    }
};

(async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
