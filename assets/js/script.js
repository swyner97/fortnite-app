let key = config.SECRET_API_KEY;
let url = 'https://cors-anywhere.herokuapp.com/https://fortnite-api.com/v2/shop/br/combined?entries=items&limit=10';

// function getAPI(url) {
//     fetch(url)
//         .then(function (response) {
//             response.json()
//         })
//         .then(function (data) {
//             console.log(data)
//         });
// }


// getAPI();

function getAPI(url) {
    const options = {method: 'GET'};

    fetch('https://fortnite-api.com/v2/shop/br', options)
      .then(response => response.json())
      .then(response => console.log(response.data.featured.entries))
      .catch(err => console.error(err));
}

getAPI();