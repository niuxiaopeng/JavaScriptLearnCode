function concatenate(...name){
    let concatenatedName="";
    for(let i=0;i<name.length;i++){
        concatenatedName+=name[i];
        if(i!=name.length-1){
            concatenatedName+=".";
        }
    }
    return concatenatedName;
}

let lName="中田";
let fName="雄二";
console.log("結合結果："+concatenate(fName,lName));
console.log("ピカソの本名："+concatenate("ffffff","asfdaf","fajfdsa","fdasfja","fdasfsadf"));
