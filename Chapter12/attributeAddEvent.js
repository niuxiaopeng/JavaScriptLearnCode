function onCheckallChanged(){
    let checkall=document.getElementById("checkall");
    if(checkall.checked){
        checkall.nextSibling.textContent="全て外す";
    }else{
        checkall.nextSibling.textContent="全てチェック";
    }

    let checkboxes=document.getElementsByName("skill");

    for(let i=0;i<checkboxes.length;i++){
        checkboxes[i].checked=checkall.checked;
    }
}