canvas = document.getElementById("myCanvas")
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown (e){
    mouseEvent= "mousedown";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave (e){
    mouseEvent= "mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup (e){
    mouseEvent= "mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove (e){

    current_position_of_mouse_x = e.clientX - mouse.offsetLeft;
    current_position_of_mouse_y = e.clientY - mouse.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.moveTo (last_position_of_x,last_position_of_y);
        ctx.lineTo (current_position_of_mouse_x,current_position_of_mouse_y);
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
    }

}


