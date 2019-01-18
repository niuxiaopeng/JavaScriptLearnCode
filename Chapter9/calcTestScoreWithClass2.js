class TestScore{
    constructor(){
        this.name="";
        this.english=0;
        this.math=0;
        this.japanese=0;
    }
}

function printScore(student){
    let sum=student.english+student.math+student.japanese;
    let ave=sum/3;
    console.log(student.name+"的总分："+sum+"  平均分："+ave);
}

let xiaoming=new TestScore();
xiaoming.name="小明";
xiaoming.english=92;
xiaoming.math=87;
xiaoming.japanese=74;
printScore(xiaoming);

let xiaoming1=new TestScore();
xiaoming1.name="小红";
xiaoming1.english=79;
xiaoming1.math=95;
xiaoming1.japanese=83;
printScore(xiaoming1);


