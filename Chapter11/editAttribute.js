function onP2RedButtonClick(){
    let showText=document.getElementById("showText");
    showText.setAttribute("class","redText");
}

function onP2DefaultButtonClick(){
    let showText=document.getElementById("showText");
    showText.removeAttribute("class");
}

function onP2DefaultButtonClick1(){
    let showText=document.getElementById("showText");
    if(showText.className==="redText")
    {
        showText.removeAttribute("class");
    }else{
        showText.setAttribute("class","redText");
    }
    
}