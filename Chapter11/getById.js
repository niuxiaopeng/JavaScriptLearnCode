function onH1ButtonClick(){
    let headTitle=document.getElementById("headTitle");
    console.log(headTitle);
}

function onH1TextButtonClick(){
    let headTitle=document.getElementById("headTitle");
    let headTitleText=headTitle.textContent;
    console.log(headTitleText);
}

function onH1TextAltButtonClick(){
    let headTitle=document.getElementById("headTitle");
    if(headTitle.textContent==="通过Id获取的实例"){
        headTitle.textContent="idによる要素取得サンプル";
    }else{
        headTitle.textContent="通过Id获取的实例";
    }
}