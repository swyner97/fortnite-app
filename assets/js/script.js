var myHeaders = new Headers();
myHeaders.append("Authorization", "{{authorization}}");


let getAllItems = () => {

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://fortnite-api.theapinetwork.com/store/get", requestOptions)
        .then(response => response.json())
        .then(data => { 

            for (let i = 0; i < data.data.length; i++) {
                let itemName = data.data[i].item.name.toString();
                let itemInfo = data.data[i].item.description;
                let itemPrice = data.data[i].store.cost;
                let imgEl = document.createElement('img');
                imgEl.setAttribute('src', data.data[i].item.images.icon);
                // let itemList = document.createElement('li');
                // let itemUl = document.querySelector('.all-items')

                // itemList.append(itemName, itemInfo, itemInfo, itemPrice, imgEl);
                // itemUl.append(itemList)
                // console.log(itemInfo)
            }
            console.log(data.data.length)
            let result = data.data.filter(filterFunc)
            console.log(result)

            // for (let i = 0; i < data.data.length; i++) {

            //     // const result = data.data.filter(data.data[i].item => data.data[i].item === 'cheer')
            //     const result = data.data.filter(filterFunc)
            //     console.log(result)

            // }
        }).catch(error => console.log('error', error));

}

let filterFunc = (data) => {
    // return data === 'cheer'
    // console.log(data.item.name)
    return data.item.name == 'Spider-Man'
}

getAllItems()

let searchItem = () => {
    let data = getAllItems();

    let searchBar = document.getElementById('#input');
    let item = input.data.data[i].item.name.toString();
    let resultUl = document.getElementById('.search-list');
    let searchResult = []

    input.addEventListener('keyup', (event) => {
        let { value } = event.target;

        let searchQuery = value.toLowerCase();

        //   for(let searchEl of ) {

        //   }


    })

}

searchItem();

// Populate current items from API


// function currentItemStore(event) {
//     const options = {
//         method: "GET",
//         headers: { "TRN-API-Key": "e486b319-39d4-49b9-a3f1-ee5151dd4bb6" },
//     };


//     fetch("https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/store", options)
//         .then((response) => response.json())
//         .then(function (data) {
//             console.log(data);
//             for (var i = 0; i < data.length; i++) {
//                 let displayEl = $('.current-store-gallery')
//                 let currentItemCardsEl = $(`<div class="w3-padding w3-margin item-card"></div>`);
//                 let itemImageEl = $(`<img src='${data[i].imageUrl}'/>`);
//                 let itemNameEl = $(`<h3>${data[i].name}</h3>`);
//                 let itemRarityEl = $(`<h4>${data[i].rarity}</h4>`);
//                 let itemCostEl = $(`<h4>${data[i].vBucks}</h4>`);
//                 let wishlistBtnEl = $(`<button class=wishlist-btn>Add to Wishlist</button>`);

//                 currentItemCardsEl.append(itemImageEl, itemNameEl, itemRarityEl, itemCostEl, wishlistBtnEl);
//                 displayEl.append(currentItemCardsEl);
//             }
//         })
//         .catch((err) => console.error(err));
// };

// currentItemStore();

// // Local storage for wishlist/searchbar
// var wishlistAdder = document.querySelector(".wishlistAdder");
// var itemName = document.querySelector("#item");
// var searchBarInput = document.querySelector("#searchBar");
// var searchButton = document.querySelector("#searchBtn");

// var wishlist = [];
// var lastSearched = [];

// function renderWishlist() {

// }

// function init() {
//     var storedWishlist = JSON.parse(localstorage.getItem("wishlist"));
//     var storedSearches = JSON.parse(localStorage.getItem("lastSearched"));

//     if (storedWishlist !== null || storedSearches !== null) {
//         wishlist = storedWishlist;
//         lastSearched = storedSearches;
//     };
// };

// function addToWishlist() {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// };

// wishlistAdder.addEventListener("click", function () {
//     wishlist.push(itemName);

//     addToWishlist();
//     renderWishlist();
// });

// function storeLastSearched() {
//     localStorage.setItem("lastSearched", JSON.stringify(lastSearched))
// };

// searchButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     var searchText = searchBarInput.value.trim();

//     if (searchText === "") {
//         return;
//     };

//     lastSearched.push(searchText);
//     searchBarInput.value = "";

//     storeLastSearched();
// });

// init();



  // In order to get access to this api, we have to go to this link (cors-anywhere.herokuapp.com) and get access every day/every time we work on the project.
  // We also have to put this in our README for the grading team so they can refresh before grading.