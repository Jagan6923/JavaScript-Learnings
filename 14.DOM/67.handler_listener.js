let button1 = document.getElementById("listener");
let button2 = document.getElementById("handler");

// function firstHandler() {
//     button1.addEventListener("click", function () {
//         console.log("listener clicked");
//     })
//     button1.addEventListener("click", function () {
//         console.log("listener clicked 2");
//     })

//     button2.onclick = function () {
//         console.log("handler clicked");
//     }
//     button2.onclick = function () {
//         console.log("handler clicked 2");
//     }
//     button2.onclick = function () {
//         console.log("handler clicked 3");
//     }

// }
// firstHandler()

let image = document.querySelector("img")
let imgTitle = document.querySelector("p")

image.addEventListener("mouseover", function () {
    image.src = "2.png"
    imgTitle.textContent = "Just keep going"
})

image.addEventListener("mouseout", function () {
    image.src = "3.png"
    imgTitle.textContent = "Shoot for the moon"
})