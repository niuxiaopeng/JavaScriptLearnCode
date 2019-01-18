let list=[2,7,66,4,9];

//forEach可以直接写无名函数，有很多情况会用到无名函数
list.forEach(
    function(currentValue,index,array){
        console.log("第"+(index+1)+"个值："+currentValue);
    }
);