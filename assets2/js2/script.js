var myHeaders = new Headers();
myHeaders.append("Authorization", "{{authorization}}");

let searchBtn = $('.button');


let getAllItems = () => {

  let searchBox = $('.input').val();
  localStorage.setItem('searchItem', searchBox);
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://fortnite-api.theapinetwork.com/items/list", requestOptions)
    .then(response => response.json())
    .then(data => {
      let card = document.querySelectorAll('.card');
      let userSearch = localStorage.getItem('searchItem');

      for (let i = 0; i < data.data.length; i++) {
        let itemName = data.data[i].item.name.toString();
        let header = document.createElement('header');
        let name = document.createElement('p');
        let priceDiv = document.createElement('div')
        header.classList.add('card-header')
        let itemInfo = data.data[i].item.description;
        let itemPrice = data.data[i].item.cost;
        let rarityEl = document.createElement('p');
        let rarity = data.data[i].item.rarity;
        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', data.data[i].item.images.icon);
        let itemContent = document.createElement('div');
        itemContent.classList.add('card-content');
        let contentDiv = document.createElement('div');
        contentDiv.classList.add('content', 'is-flex', 'is-flex-direction-column', 'is-align-items-center')
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('card-image');
        let cardsContainer = document.querySelector('.cards');
        let cardDiv = document.createElement('div');
        cardDiv.setAttribute('id', 'card-div-object')
        cardDiv.classList.add('card', 'is-hidden');
        let wishlistBtnEl = document.createElement('button');
        wishlistBtnEl.innerHTML = 'Add to Wishlist';
        wishlistBtnEl.setAttribute('class', 'wishlist-btn');
        wishlistBtnEl.setAttribute('item-name', data.data[i].item.name.toString());
        wishlistBtnEl.setAttribute('item-rarity', data.data[i].item.rarity);
        wishlistBtnEl.setAttribute('item-cost', data.data[i].item.cost);
        wishlistBtnEl.setAttribute('item-img', data.data[i].item.images.icon)

        rarityEl.append(rarity);
        priceDiv.append(itemPrice);
        header.append(name);
        name.append(itemName);
        itemContent.append(contentDiv, wishlistBtnEl);
        contentDiv.append(name, priceDiv, rarityEl, itemInfo)
        cardDiv.append(imgDiv, itemContent);
        cardsContainer.append(cardDiv);
        imgDiv.append(imgEl);
    
      }
      for (let i = 0; i < card.length; i++) {
        if (card[i].innerText.toLowerCase()
          .includes(userSearch.toLowerCase())) {
          card[i].classList.remove('is-hidden');

        } else {
          card[i].classList.add('is-hidden')
        }

      };
      $('.wishlist-btn').unbind().on('click', function (event) {
        let wishlistName = $(this).attr('item-name');
        let wishlistRare = $(this).attr('item-rarity');
        let wishlistCost = $(this).attr('item-cost');
        let wishlistImg = $(this).attr('item-img');
        event.preventDefault();
        
        if (!wishlist.includes(wishlistName)){
          wishlist.push({Name: `${wishlistName}`, Rarity: `${wishlistRare}`, Cost: `${wishlistCost}`, Url: `${wishlistImg}`});
          localStorage.setItem("wishlist",JSON.stringify(wishlist));
    }}).catch(error => console.log('error', error));
});};

    searchBtn.on('click', function (event) {
      getAllItems()
      $('.input').val('');
      });



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
        let itemNameEl = $(`<h3 id='item-name'>${data[i].name}</h3>`);
        let itemRarityEl = $(`<h4 id='item-rarity'>${data[i].rarity}</h4>`);
        let itemCostEl = $(`<h4 id='item-cost'>${data[i].vBucks}</h4>`);
        itemContentDiv.append(itemNameEl, itemRarityEl, itemCostEl);
        // button
        let wishlistBtnEl = $(
          `<button class='wishlist-btn' 
          item-name='${data[i].name}'
          item-rarity='${data[i].rarity}'
          item-img='${data[i].imageUrl}'
          item-cost='${data[i].vBucks}'>
          Add to Wishlist</button>`
        );

        currentItemCardsEl.append(itemImgDiv, itemContentDiv, wishlistBtnEl);
        displayEl.append(currentItemCardsEl);

         // var wishlistAdder = document.querySelector(".wishlist-btn");
    $('.wishlist-btn').unbind().on('click', function (event) {
      let wishlistName = $(this).attr('item-name');
      let wishlistRare = $(this).attr('item-rarity');
      let wishlistCost = $(this).attr('item-cost');
      let wishlistImg = $(this).attr('item-img');
      event.preventDefault();
      
      if (!wishlist.includes(wishlistName)){
        wishlist.push({Name: `${wishlistName}`, Rarity: `${wishlistRare}`, Cost: `${wishlistCost}`, Url: `${wishlistImg}`});
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
      }
    });
      }})
    .catch((err) => console.error(err));
};

currentItemStore();

// // Local storage for wishlist/searchbar

var wishlist = [];
var lastSearched = [];



function init() {
  var storedWishlist = JSON.parse(localStorage.getItem("wishlist"));

  if (storedWishlist !== null) {
for (i=0; i<storedWishlist.length; i++) {
  // gallery from HTML
  let displayEl = $("#wishlist-gallery");
  // card div
  let currentItemCardsEl = $(`<div class="card" id="item-card"></div>`);
  // img
  let itemImgDiv = $(`<div class='card-image'></div>`);
  let itemImageEl = $(
    `<figure class='image is-3by2'><img src='${storedWishlist[i].Url}'/></figure>`
  );
  itemImgDiv.append(itemImageEl);
  // card content

  console.log(storedWishlist)
  let itemContentDiv = $(`<div class='card-content'></div>`);
  let itemNameEl = $(`<h3 id='item-name'>${storedWishlist[i].Name}</h3>`);
  let itemRarityEl = $(`<h4 id='item-rarity'>${storedWishlist[i].Rarity}</h4>`);
  let itemCostEl = $(`<h4 id='item-cost'>${storedWishlist[i].Cost}</h4>`);
  itemContentDiv.append(itemNameEl, itemRarityEl, itemCostEl);

  currentItemCardsEl.append(itemImgDiv, itemContentDiv);
  displayEl.append(currentItemCardsEl);
}
  }
};
  
// In order to get access to this api, we have to go to this link (cors-anywhere.herokuapp.com) and get access every day/every time we work on the project.
// We also have to put this in our README for the grading team so they can refresh before grading.