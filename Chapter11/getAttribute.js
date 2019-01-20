function onFreewordButtonClick(){
    let freewordInput=document.getElementById("freewordInput");
    let freewordInputValue=freewordInput.value;

    let freewordInputName=freewordInput.getAttribute("value");
    let showInput=document.getElementById("showInput");

    if(freewordInputValue==="")
    {
        freewordInputValue="未输入";
    }
    showInput.textContent="name属性："+freewordInputName+" 的输入值："+freewordInputValue;
}