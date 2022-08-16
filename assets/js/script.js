<<<<<<< HEAD
// Submit button variable and function
let submitBtnEl = $("#submit-btn");


submitBtnEl.on("click", function (event) {
  let userSearch = $(this).siblings("#searched-item").val();
  localStorage.setItem("item-request", userSearch);
  $(this).siblings("#searched-item").val("");

  const options = {
    method: "GET",
    headers: { "TRN-API-Key": " e486b319-39d4-49b9-a3f1-ee5151dd4bb6"},

  };

  fetch("https://www.cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/store", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
        method: 'GET',
    headers: {
      'TRN-Api-Key': 'e486b319-39d4-49b9-a3f1-ee5151dd4bb6',
    //   'Access-Control-Allow-Origin': '*',
    },
    // mode: 'no-cors'
  };
  
  fetch('https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/store', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
>>>>>>> 08105d15f116d91ebe43f7e65f98ed8cdcc25ffb
});

// In order to get access to this api, we have to go to this link (cors-anywhere.herokuapp.com) and get access every day/every time we work on the project. 
// We also have to put this in our README for the grading team so they can refresh before grading. 




function insert(arr, index, ...items)
{
    return [
            ...arr.slice(0, index),
            ...items,
            ...arr.slice(index)
        ];
}
 
var arr = [arr];
var result = insert(arr);
console.log(result);


// I believe this is the api for the current items rather than the full store.
// I will keep it here just in case

// fetch('https://fortnite-api.com/v2/shop/br').then(res =>{
//     console.log(res)

// console.log(data)
// })
=======
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
>>>>>>> e14be8652930c26c236d6b6acce7d0af34455d26
