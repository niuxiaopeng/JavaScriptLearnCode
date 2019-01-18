function concatenate(lastName,firstName,space){
    return lastName+space+firstName;
}

let lName="中田";
let fName="雄二";
console.log("半角スペースで結合："+concatenate(lName,fName,"  "));
console.log("第３引数の渡し忘れ："+concatenate(lName,fName));
console.log("第２、３引数の渡し忘れ："+concatenate(lName));
console.log("全ての引数の渡し忘れ："+concatenate());