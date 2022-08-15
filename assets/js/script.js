let key = config.SECRET_API_KEY;
let url = 'https://fortnite-api.com/v2/shop/br?daily=entires&limit=6';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        });