let a;
let b;
let c;
let count = 0;


document.getElementById("die").onclick = function(){

    a = Math.floor(Math.random()*6) + 1;
    b = Math.floor(Math.random()*6) + 1;
    c = Math.floor(Math.random()*6) + 1;

    document.getElementById("xLable").innerHTML = a + "-";
    document.getElementById("yLable").innerHTML = b + "-";
    document.getElementById("zLable").innerHTML = c + "";
}

document.getElementById("reset").onclick = function (){
   count = 0;
//    console.log(count)
//    document.getElementsByClassName("Lable").innerHTML = 0;
document.getElementById("xLable").innerHTML = count + "-";
document.getElementById("yLable").innerHTML = count + "-";
document.getElementById("zLable").innerHTML = count;
}