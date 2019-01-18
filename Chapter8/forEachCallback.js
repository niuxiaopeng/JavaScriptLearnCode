function printElement(currentValue,index,array){
    console.log("第"+(index+1)+"个值："+currentValue);
}

// function printElement(v,i,a){
//         console.log("第"+(i+1)+"个值："+v);
// }

//JavaScript中处理的forEach方法更为简便，直接作为数组的一个自带方法。
let list=[2,7,66,4,9];
list.forEach(printElement);