function printScore(name,english,math,japanese){
    let sum=english+math+japanese;
    let ave=sum/3;
    console.log(name+"的总分："+sum+"  平均分："+ave);
}

let name="小明";
let english=92;
let math=87;
let japanese=74;
printScore(name,english,math,japanese);

let name1="小红";
let english1=79;
let math1=95;
let japanese1=83;
printScore(name1,english1,math1,japanese1);

