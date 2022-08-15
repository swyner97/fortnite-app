let key = config.SECRET_API_KEY;

fetch('https://fortnite-api.com/v2/shop/br')
  .then((response) => response.json())
  .then((data) => console.log(data));