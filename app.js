let index = 0;



//Imagenes estaticas
const imagenes = [
  "url('https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/what-is-coding.png')",
  "url('https://noodlepros.ghost.io/content/images/wordpress/2017/12/coding-or-foreign-language-scaled.jpg')",
  "url('https://www.muyseguridad.net/wp-content/uploads/2021/01/seguridad_en_Internet.jpg')",
  "url('https://wallpaperaccess.com/full/279553.jpg')",
  "url('https://lifeisanepisode.com/wp-content/uploads/woman-visiting-website-on-her-laptop-1280x720.jpg')"
];

//GIFS

/*
const imagenes = [
  "url('https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/what-is-coding.png')",
  "url('https://noodlepros.ghost.io/content/images/wordpress/2017/12/coding-or-foreign-language-scaled.jpg')",
  "url('https://www.muyseguridad.net/wp-content/uploads/2021/01/seguridad_en_Internet.jpg')",
  "url('https://wallpaperaccess.com/full/279553.jpg')",
  "url('https://lifeisanepisode.com/wp-content/uploads/woman-visiting-website-on-her-laptop-1280x720.jpg')"
];
 */


//Funcion apra el header
var prevScrollpos = window.pageYOffset; //This variable indicates if we are going up or down in the page
window.onscroll = function() { //This function hides the header if we are going down, and shows it if we are going up
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}


//Funcion para cambiar las imagenes de fondo

function cambiarImagen(){
  switch (index){
    case 0: document.getElementById('welcome').style.backgroundImage = imagenes[1];
    index++;
    break;
    case 1: document.getElementById('welcome').style.backgroundImage = imagenes[2];
    index++;
    break;
    case 2: document.getElementById('welcome').style.backgroundImage = imagenes[3];
    index++;
    break;
    case 3: document.getElementById('welcome').style.backgroundImage = imagenes[4];
    index++;
    break;
    case 4: document.getElementById('welcome').style.backgroundImage = imagenes[0];
    index = 0;
    break;
  }
}

let timer = setInterval(cambiarImagen,3500)

// Funciones para slider

function onLoad(){
  let cardContainer = document.getElementById("card-container");
  document.getElementById("btnSlideLeft").onclick = function(){
    cardContainer.scrollLeft -= 800;
  }
  document.getElementById("btnSlideRight").onclick = function(){
    cardContainer.scrollLeft += 800;
  }
}