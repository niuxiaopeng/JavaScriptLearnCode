function onAddListItemButtonClick(){
    let addListItemInput=document.getElementById("addListItemInput");
    let addListItemInputText=addListItemInput.value;
    let listItem=document.createElement("li");
    listItem.textContent=addListItemInputText;
    listItem.classList.add("blueText");
    let skillList=document.getElementById("skillList");

    //将元素添加在队列的最后面
    skillList.appendChild(listItem);
    //将元素添加在队列的最前面
    // skillList.insertBefore(listItem,skillList.firstElementChild);
}

function onRemoveListItemButtonClick(){
    let skillList=document.getElementById("skillList");
    //将队列里面最后一个元素移除
    // skillList.removeChild(skillList.lastElementChild);

    let addListItemInput=document.getElementById("addListItemInput");
    let addListItemInputText=addListItemInput.value;
    let listItem=document.createElement("li");
    listItem.textContent=addListItemInputText;
    listItem.classList.add("blueText");
    skillList.replaceChild(listItem,skillList.lastElementChild);
}

function onAddLinkButtonClick(){
    let addlinkUrlText=document.getElementById("addLinkUrl").value;
    let addLinkNameText=document.getElementById("addLinkName").value;
    let addHtml="<a href=\""+addlinkUrlText+"\">"+addLinkNameText+"</a>";
    let addLink=document.getElementById("addLink");
    addLink.innerHTML=addHtml;
}