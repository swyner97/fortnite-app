
let key = config.SECRET_API_KEY;
let url = 'https://cors-anywhere.herokuapp.com/https://fortnite-api.com/v2/shop/br/combined?entries=items&limit=10';


let getAPI = (url) => {
    const options = {method: 'GET'};

    fetch('https://fortnite-api.com/v2/shop/br', options)
      .then(response => response.json())
      .then(response => console.log(response.data))
      .catch(err => console.error(err));
}

getAPI();

// Submit button variable and function
let submitBtnEl = $("#submit-btn");


submitBtnEl.on("click", function (event) {
  let userSearch = $(this).siblings("#searched-item").val();
  localStorage.setItem("item-request", userSearch);

  const options = {
    method: "GET",
    headers: { "TRN-API-Key": "e486b319-39d4-49b9-a3f1-ee5151dd4bb6"},
  };


  fetch("https://crossorigin.me/https://api.fortnitetracker.com/v1/store", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});

  fetch("https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/store", options)
    .then((response) => response.json())
    .then(function(data) {
      console.log(data);
      for (var i=0; i<data.length; i++) {
        let displayEl = $('.HTMLPLACEHOLDER')
        let currentItemCardsEl = $(`<div></div>`);
        let itemImageEl  = $(`<img src='${data[i].imageUrl}'/>`);
        let itemNameEl = $(`<h3>${data[i].name}</h3>`);
        let itemRarityEl = $(`<h4>${data[i].rarity}</h4>`);
        let itemCostEl = $(`<h4>${data[i].vBucks}</h4>`);
        let wishlistBtnEl = $(`<button class=wishlist-btn>Add to Wishlist</button>`);

        currentItemCardsEl.append(itemImageEl, itemNameEl, itemRarityEl, itemCostEl, wishlistBtnEl);
        displayEl.append(currentItemCardsEl);
      }
    })
    .catch((err) => console.error(err));
  }); 


// In order to get access to this api, we have to go to this link (cors-anywhere.herokuapp.com) and get access every day/every time we work on the project. 
// We also have to put this in our README for the grading team so they can refresh before grading. 




