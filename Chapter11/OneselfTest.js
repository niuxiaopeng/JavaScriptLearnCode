function sleep(n) {
    var start = new Date().getTime();
    while(true){
        if(new Date().getTime()-start > n){
            break;
        } 
    }  
}

//这句话，只有在浏览器里面才能用，不能在node里面用
window.confirm("よろしいですか？");
opened=window.open("https://www.google.co.jp/");
opened1=window.open("https://www.google.co.jp/");
//JavaScript中没有多线程的概念,这样做是没有意义的.
sleep(200);
opened.close();
opened1.close();
//这样是让滚动条往下滚动100个像素
window.scroll(0,100);

window.alert("Hello");
