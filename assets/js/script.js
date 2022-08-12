// Submit button variable and function
let submitBtnEl = $('#submit-btn');

submitBtnEl.on('click', function(event) {
    let userSearch = $(this).siblings('#searched-item').val();
    localStorage.setItem('item-request', userSearch);
    $(this).siblings('#searched-item').val('');
});




// fetch('https://fortnite-api.com/v2/shop/br').then(res =>{
//     console.log(res)
    
// console.log(data)
// })
