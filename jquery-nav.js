// learning concept


// shorthand of JQuery is a dollar sign we can use both in code
$(document).ready(function(){
    $('.burger-menu').on('click',function(){
        $('.hide').toggle("fast");
    })
});



// using only javascript

// const burger = document.querySelector('.burger-menu');
// const button = document.querySelector('.button');
// burger.addEventListener('click',function(){
//     button.classList.toggle('hide');
// });