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
});


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

// fetch('https://fortnite-api.com/v2/shop/br').then(res =>{
//     console.log(res)

// console.log(data)
// })
