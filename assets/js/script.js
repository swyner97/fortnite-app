var myHeaders = new Headers();
myHeaders.append("Authorization", "{{authorization}}");


let getAllItems = () => {

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

fetch("https://fortnite-api.theapinetwork.com/items/list", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  for (let i = 0; i < result.length; i++) {
    let item = result.data.item
    console.log(item)
  }

}

getAllItems



// Submit button variable and function


// function currentItemStore(event) {
//   const options = {
//     method: "GET",
//     headers: { "TRN-API-Key": "e486b319-39d4-49b9-a3f1-ee5151dd4bb6" },
//   };


//   fetch("https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/store", options)
//     .then((response) => response.json())
//     .then(function (data) {
//       console.log(data);
//       for (var i = 0; i < data.length; i++) {
//         let displayEl = $('.HTMLPLACEHOLDER')
//         let currentItemCardsEl = $(`<div></div>`);
//         let itemImageEl = $(`<img src='${data[i].imageUrl}'/>`);
//         let itemNameEl = $(`<h3>${data[i].name}</h3>`);
//         let itemRarityEl = $(`<h4>${data[i].rarity}</h4>`);
//         let itemCostEl = $(`<h4>${data[i].vBucks}</h4>`);
//         let wishlistBtnEl = $(`<button class=wishlist-btn>Add to Wishlist</button>`);

//         currentItemCardsEl.append(itemImageEl, itemNameEl, itemRarityEl, itemCostEl, wishlistBtnEl);
//         displayEl.append(currentItemCardsEl);
//       }
//     }).catch((err) => console.error(err));
// };



// currentItemStore();



// In order to get access to this api, we have to go to this link (cors-anywhere.herokuapp.com) and get access every day/every time we work on the project. 
// We also have to put this in our README for the grading team so they can refresh before grading.