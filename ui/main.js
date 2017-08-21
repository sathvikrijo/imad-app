console.log('Loaded!');

var element = document.getElementById("main-txt");

element.innerHTML = "Hello World!!!";

var img = document.getElementById("piggy");

var marginLeft = 0;

function moveRight(){
    margin.Left = marginLeft + 10;
    img.style.marginLeft = marginLeft+'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight, 100);
}