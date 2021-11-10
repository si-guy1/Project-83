var mouseEvent = "empty";
var last_position_of_X , last_position_of_Y;

var last_position_of_touch_X,last_position_of_touch_Y;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
color = "orange";
width_of_line = 1;

function symbol(){
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(200,200,40,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(300,200,40,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(400,200,40,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 5;
    ctx.arc(250,230,40,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(350,230,40,0,2*Math.PI);
    ctx.stroke();
}

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);
    width_of_line = document.getElementById("width_of_line").value;
    console.log(width_of_line);
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_X,last_position_of_Y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();  
    }
    last_position_of_X = current_position_of_mouse_x;
    last_position_of_Y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("touchstart" , my_touchstart);

function my_touchstart(e)
{
    color = document.getElementById("color").value;
    console.log(color);
    width_of_line = document.getElementById("width_of_line").value;
    console.log(width_of_line);
    last_position_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove" , my_touchmove);

function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_X,last_position_of_touch_Y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();  
    last_position_of_touch_X = current_position_of_touch_x;
    last_position_of_touch_Y = current_position_of_touch_y;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}