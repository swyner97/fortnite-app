var myHeaders = new Headers();
myHeaders.append("Authorization", "{{authorization}}");

let getAllItems = () => {
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://fortnite-api.theapinetwork.com/store/get", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        let itemName = data.data[i].item.name.toString();
        let itemInfo = data.data[i].item.description;
        let itemPrice = data.data[i].store.cost;
        let imgEl = document.createElement("img");
        imgEl.setAttribute("src", data.data[i].item.images.icon);
        let itemList = document.createElement("li");
        let itemUl = document.querySelector(".all-items");
        console.log(data.data[i].item.images.featured);

        itemList.append(itemName, itemInfo, itemInfo, itemPrice, imgEl);
        itemUl.append(itemList);
      }
    })
    .catch((error) => console.log("error", error));
};

getAllItems();

// Populate current items from API

function currentItemStore(event) {
  const options = {
    method: "GET",
    headers: { "TRN-API-Key": "e486b319-39d4-49b9-a3f1-ee5151dd4bb6" },
  };

  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/store",
    options
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // gallery from HTML
        let displayEl = $("#current-gallery");
        // card div
        let currentItemCardsEl = $(`<div class="card" id="item-card"></div>`);
        // img
        let itemImgDiv = $(`<div class='card-image'></div>`);
        let itemImageEl = $(
          `<figure class='image is-3by2'><img src='${data[i].imageUrl}'/></figure>`
        );
        itemImgDiv.append(itemImageEl);
        // card content
        let itemContentDiv = $(`<div class='card-content'></div>`);
        let itemNameEl = $(`<h3>${data[i].name}</h3>`);
        let itemRarityEl = $(`<h4>${data[i].rarity}</h4>`);
        let itemCostEl = $(`<h4>${data[i].vBucks}</h4>`);
        itemContentDiv.append(itemNameEl, itemRarityEl, itemCostEl);
        // button
        let wishlistBtnEl = $(
          `<button class=wishlist-btn>Add to Wishlist</button>`
        );

        currentItemCardsEl.append(itemImgDiv, itemContentDiv, wishlistBtnEl);
        displayEl.append(currentItemCardsEl);
      }
    })
    .catch((err) => console.error(err));
}

currentItemStore();

// Local storage for wishlist/searchbar
var wishlistAdder = document.querySelector(".wishlistAdder");
var itemName = document.querySelector("#item");
var searchBarInput = document.querySelector("#searchBar");
var searchButton = document.querySelector("#searchBtn");

var wishlist = [];
var lastSearched = [];

function renderWishlist() {}

// function init() {
//   var storedWishlist = JSON.parse(localstorage.getItem("wishlist"));
//   var storedSearches = JSON.parse(localStorage.getItem("lastSearched"));

//   if (storedWishlist !== null || storedSearches !== null) {
//     wishlist = storedWishlist;
//     lastSearched = storedSearches;
//   }
// }

// function addToWishlist() {
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));
// }

// wishlistAdder.addEventListener("click", function () {
//   wishlist.push(itemName);

//   addToWishlist();
//   renderWishlist();
// });

// function storeLastSearched() {
//   localStorage.setItem("lastSearched", JSON.stringify(lastSearched));
// }

// searchButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   var searchText = searchBarInput.value.trim();

//   if (searchText === "") {
//     return;
//   }

//   lastSearched.push(searchText);
//   searchBarInput.value = "";

//   storeLastSearched();
// });

// init();

// // In order to get access to this api, we have to go to this link (cors-anywhere.herokuapp.com) and get access every day/every time we work on the project.
// // We also have to put this in our README for the grading team so they can refresh before grading.