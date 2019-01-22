window.addEventListener("DOMContentLoaded",function(){
    let messageArea=document.getElementById("messageArea");
    messageArea.addEventListener("input",function(){
        let message=messageArea.value;
        let megLength=message.length;
        let showMessageLength=document.getElementById("showMessageLength");
        showMessageLength.textContent=megLength+"/70";
        if(megLength>70){
            messageArea.classList.add("alertBg");
        }else{
            messageArea.classList.remove("alertBg");
        }
    });
})