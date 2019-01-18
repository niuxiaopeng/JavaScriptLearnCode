function concatenate(lastName="",firstName="",space=""){
    return lastName+space+firstName;
}

let nameParam1=["中田","雄二","."];
//可以用三个点来将数组拆开，作为多个参数输入，这个很有意思。
console.log(".で結合"+concatenate(...nameParam1));
let nameParam2=["中田","雄二"];
console.log("空文字で結合："+concatenate(...nameParam2));