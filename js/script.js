
const sidebar = document.querySelector(".side-navbar");
const content = document.querySelector(".content-section");
const banner = document.querySelector(".banner-section");

function responsiveNav() {
    if(sidebar.style.display === "flex"){
        sidebar.style.display = "none"
        content.style.opacity = "1"
    }
    else{
        sidebar.style.display = "flex"
        content.style.opacity = "0.1"
        banner.style.height = "100vh"
    }
}

