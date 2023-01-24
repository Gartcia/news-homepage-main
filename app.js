const articleNumbers = document.getElementById("numbers");
const img = document.getElementById("img-mobile")
const objectNews = [
    {
        id:"01",
        img:"./assets/images/image-retro-pcs.jpg",
        head:"Reviving Retro PCs",
        paragraph:"What happens when old PCs are given modern upgrades?"
    },
    {
        id:"02",
        img:"./assets/images/image-top-laptops.jpg",
        head:"Top 10 Laptops of 2022",
        paragraph:"Our best picks for various needs and budgets."
    },
    {
        id:"03",
        img:"./assets/images/image-gaming-growth.jpg",
        head:"The Growth of Gaming",
        paragraph:"How the pandemic has sparked fresh opportunities."
    }
];
const btn = document.querySelectorAll(".btn");
const closeBtn = document.querySelector(".close");
const navContainer = document.querySelector(".nav-container");

btn.forEach(btn => {
    btn.addEventListener("click", function(e){
        navContainer.classList.toggle("show");
        closeBtn.classList.toggle("hidden");
    })
})

window.addEventListener("DOMContentLoaded", function(){
    if(this.window.innerWidth < 1000){
        img.setAttribute("src", "./assets/images/image-web-3-mobile.jpg")
    } else {
        img.setAttribute("src", "./assets/images/image-web-3-desktop.jpg")
    }
    const articles = objectNews.map(obj => {
        return (`<div class="flex-new"><img src="${obj.img}" alt="news image"><div class="flex-container-text"><h1>${obj.id}</h1><h2>${obj.head}</h2><p>${obj.paragraph}</p></div></div>`)
    }).join("")
    articleNumbers.innerHTML = articles;
})
window.addEventListener("resize", function(){
    if(this.window.innerWidth < 1000){
        img.setAttribute("src", "./assets/images/image-web-3-mobile.jpg")
    } else {
        img.setAttribute("src", "./assets/images/image-web-3-desktop.jpg")
    }
})