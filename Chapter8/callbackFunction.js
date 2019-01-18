function concatenateSpace(lastName="",firstName=""){
    return lastName+" "+firstName;
}

function useConcatenate(name,func){
    let concatName=func(...name);
    console.log("结合结果："+concatName);
}

//回调函数
let nameParam=["中田","雄二"];
useConcatenate(nameParam,concatenateSpace);