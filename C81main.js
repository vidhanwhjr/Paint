var canvas= document.getElementById("Canvas1");
var ctx= canvas.getContext("2d");
var color = "red";
canvas.addEventListener("mousedown", drawcircle);
 
function drawcircle(e){
    mousex= e.clientX - canvas.offsetLeft;
    mousey= e.clientY - canvas.offsetTop;
    circle(mousex, mousey);
}

function circle(mousex, mousey){
   ctx.beginPath();
   ctx.strokeStyle= color;
   ctx.lineWidth= 10;
   ctx.arc(mousex, mousey, 40,0, 2*Math.PI);
   ctx.stroke();
}

function ds(){
    ctx.clearRect(0,0, canvas.width,  canvas.height);
}