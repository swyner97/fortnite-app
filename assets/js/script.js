// Submit button variable and function
let submitBtnEl = $("#submit-btn");


submitBtnEl.on("click", function (event) {
  let userSearch = $(this).siblings("#searched-item").val();
  localStorage.setItem("item-request", userSearch);

  const options = {
    method: "GET",
    headers: { "TRN-API-Key": "e486b319-39d4-49b9-a3f1-ee5151dd4bb6"},
  };

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
        let wishlistBtnEl = $(`<button class=wishlist-btn>Add to Wishlist</button>`)

        // itemImageEl.attr('src', data[i].imageURL);
        // itemNameEl.val(data[i].name);
        // itemRarityEl.val(data[i].rarity);
        // itemCostEl.val(data[i].vBucks);
        currentItemCardsEl.append(itemImageEl, itemNameEl, itemRarityEl, itemCostEl, wishlistBtnEl);
        displayEl.append(currentItemCardsEl);
      }
    })
    .catch((err) => console.error(err));
});

// In order to get access to this api, we have to go to this link (cors-anywhere.herokuapp.com) and get access every day/every time we work on the project. 
// We also have to put this in our README for the grading team so they can refresh before grading. 


// Get the current store array and create cards for each item
function createCurrentItemCards() {

}



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
