
//sidebar function

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// random middle photo
window.onload = choosePic;

var images = new Array("./img/img2.jpg", "./img/img3.jpg", "./img/principal.jpg");

function choosePic() {
    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("random-image").src = images[randomNum];
}


