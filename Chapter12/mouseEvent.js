function init(){
    let outerBox=document.getElementById("outerBox");
    outerBox.addEventListener("mousemove",function(event){
        let innerBox=document.getElementById("innerBox");

        innerBox.textContent="x="+event.offsetX+":y="+event.offsetY;
    });
}

window.addEventListener("DOMContentLoaded",init);
