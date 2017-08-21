console.log('Loaded!');

var element = document.getElementById("main-txt");

element.innerHTML = "Hello World!!!";

var img = document.getElementById("piggy");

img.onclick = function(){
    img.style.marginLeft = '100px';
}