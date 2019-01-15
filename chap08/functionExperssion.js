function concatenateSpace(lastName="",firstName=""){
    return lastName+" "+firstName;
}

function concatenateDot(lastName="",firstName=""){
    return lastName+"."+firstName;
}

let lName="中田";
let fName="雄二";
let funcList=[concatenateSpace,concatenateDot];
//函数可以作为一个对象使用
for(let func of funcList){
    console.log(func(lName,fName));
}
