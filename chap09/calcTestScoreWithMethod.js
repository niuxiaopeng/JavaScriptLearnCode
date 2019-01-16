class TestScore{
    constructor(){
        this.name="";
        this.english=0;
        this.math=0;
        this.japanese=0;
    }

    printScore(){
        let sum=this.english+this.math+this.japanese;
        let ave=sum/3;
        console.log(this.name+"的总分："+sum+"  平均分："+ave);
    }
}

let xiaoming=new TestScore();
xiaoming.name="小明";
xiaoming.english=92;
xiaoming.math=87;
xiaoming.japanese=74;
xiaoming.printScore();

let xiaoming1=new TestScore();
xiaoming1.name="小红";
xiaoming1.english=79;
xiaoming1.math=95;
xiaoming1.japanese=83;
xiaoming1.printScore();


