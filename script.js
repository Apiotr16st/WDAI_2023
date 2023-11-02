function menu(name){
    var main = document.getElementsByClassName("main");
    for (let m of main){
        m.style.display= "none";
    }
    var ele = document.getElementById(name)
    ele.style.display="block";
}

function jpg(name){
    var as = document.getElementsByClassName("as");
    for (let n of as){
        n.style.display= "none";
    }
    var ele=document.getElementById(name)
    ele.style.display="block";
}

menu('article1');

var bt1 = document.getElementById("strona1");
bt1.addEventListener("click", ()=>{menu("article1")})
var bt2 = document.getElementById("strona2");
bt2.addEventListener("click", ()=>{menu("article2")})
var bt3 = document.getElementById("strona3");
bt3.addEventListener("click", ()=>{menu("article3")})
var bt4 = document.getElementById("strona4");
bt4.addEventListener("click", ()=>{menu("contact-form")})

jpg('img1');

var im1 = document.getElementById("strona1");
im1.addEventListener("click", ()=>{jpg("img1")})
var im2 = document.getElementById("strona2");
im2.addEventListener("click", ()=>{jpg("img2")})
var im3 = document.getElementById("strona3");
im3.addEventListener("click", ()=>{jpg("img3")})
var im4 = document.getElementById("strona4");
im4.addEventListener("click", ()=>{jpg("img4")})
