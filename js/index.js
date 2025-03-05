
let menubutton = document.getElementById("menu_button");

menubutton.addEventListener("click", showMenu);


function showMenu(){
  let menu = document.querySelector("nav.menu");
  menu.classList.toggle("show");

  let layer = document.querySelector(".fade-layer");
  layer.classList.toggle("visible");

  layer.addEventListener("click", showMenu);
}