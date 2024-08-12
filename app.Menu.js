function show(){

    document.querySelector("menu").style.backgroundColor=rgba(122,132,143,5);

}
function random(){
    var max = 255;
    var min = 0;
    var r = Math.floor(Math.random() * (max - min + 1)) + min;
    var g = Math.floor(Math.random() * (max - min + 1)) + min;
    var b = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelectorAll("span").style.backgroundColor=rgba(r,g,b,5);

}