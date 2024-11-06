// VARIABLES

const nav_links = document.querySelector(".button_group");
const social_icons = document.querySelector(".social_icons");
const menu = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile_menu");
const nav_links_mob = document.querySelector("group_button_mobile");
const break_point = 960;

// EVENT LISTENER

window.addEventListener("resize", function() {
    checkWindow();  
});

// SETTING MOBILE VS DESKTOP CONTEXTS

// function Mobile() {
//     nav_links.style.display = "none";
//     social_icons.style.display = "none";
//     menu.style.display = "block";
// }

// function Desktop() {
//     nav_links.style.display = "flex";
//     social_icons.style.display = "flex";
//     menu.style.display = "none";
// }

// function checkWindow() {
//     if (this.window.innerWidth <= break_point) {
//         Mobile();
//     } else {
//         Desktop();
//     }  
// }

// CLICKING MENU BUTTON (MOBILE)

menu.addEventListener("click", function() {
    if (menu.classList.contains("horizontal")) {
        menu.classList.toggle("horizontal", false);
        menu.classList.toggle("vertical", true);
        mobile_menu.style.display = "block";
    } else {
        menu.classList.toggle("horizontal", true);
        menu.classList.toggle("vertical", false);
        mobile_menu.style.display = "none";
    }
});

//INITIAL WINDOW CHECK

checkWindow();