const quotes = [
    "\"The two most important requirements for major success are: first, being in the right place at the right time, and second, doing something about it.\” — Ray Kroc",
    "\“Success depends upon previous preparation, and without such preparation, there is sure to be failure.\” — Confucius",
    "\“Motivation is what gets you started. Habit is what keeps you going.\” — Jim Ryun",
    "\"You don't have to be great to start, but you have to start to be great.\” — Zig Ziglar"
]
const careetures = ["course1.jpeg", "career2.jpeg", "course2.jpg", "course3.jpg", "course4.jpeg",
    "course5.jpg", "course6.jpeg"]

// grab quotes and collage divs

let quotesDiv = document.querySelector('#quotes')
let collageDiv = document.querySelector('.collage')

// modal that welcome user
let bodyTag = document.querySelector('body')
let divTag = document.createElement('div')
let dataUser =  JSON.parse(localStorage.getItem('dataBase'));

let a = 0
let b = 0

setInterval(() => {
    quotesDiv.innerHTML = `<h3>${quotes[a]}</h3>`;

    if (a === quotes.length -1) {
        a = 0;
    }else{
        a++
    }
}, 5000);

setInterval(() => {
    collageDiv.style.backgroundImage = `url('${careetures[b]}')`;

    if (b === careetures.length -1) {
        b = 0;
    }else{
        b++
    }
}, 7000);

// divTag.innerHTML = `<div class="modal" id="myModal" tabindex="-1">
// <div class="modal-dialog">
//   <div class="modal-content" style= "background-color: rgb(18, 4, 80)">
//     <div class="modal-body">
//       <h2>Welcome ${dataUser[0].name.split(' ')[1]}</h2>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       <button type="button" class="btn btn-primary">Save changes</button>
//     </div>
//   </div>
// </div>
// </div>`


// function loadModal() {
//    document.querySelector("#myModal").modal();
// }
