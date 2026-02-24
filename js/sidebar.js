// ACCORDION AUTO CLOSE
const accordions = document.querySelectorAll(".accordion");

document.querySelectorAll(".accordion-header")
    .forEach(header => {

        header.addEventListener("click", () => {

            const parent = header.parentElement;

            // close all accordions
            accordions.forEach(acc => {
                if (acc !== parent) {
                    acc.classList.remove("active");
                }
            });

            // toggle clicked one
            parent.classList.toggle("active");

        });

    });





// const hideBtn = document.querySelector(".hide_btn");
// const titleText = document.querySelector(".hide_btn_invisible");

// hideBtn.addEventListener("click", () => {
//     titleText.classList.toggle("hide-text");
// });

// const sidebar = document.querySelector(".sidebar");

// hideBtn.addEventListener("click", () => {
//     sidebar.classList.toggle("hide");
// });




const hideBtn = document.querySelector(".hide_btn");
const titleText = document.querySelector(".hide_btn_invisible");
const sidebar = document.querySelector(".sidebar");

// Button Click
hideBtn.addEventListener("click", () => {
    titleText.classList.toggle("hide-text");
    sidebar.classList.toggle("hide");
});


// ✅ Check screen size
function checkScreen() {
    if (window.innerWidth <= 1200) {
        sidebar.classList.add("hide");
        titleText.classList.add("hide-text");
    } else {
        sidebar.classList.remove("hide");
        titleText.classList.remove("hide-text");
    }
}

// Run on page load
checkScreen();

// Run when resizing
window.addEventListener("resize", checkScreen);