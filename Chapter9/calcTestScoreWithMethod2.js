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

    setData(name="",english=0,math=0,japanese=0){
        this.name=name;
        this.english=english;
        this.math=math;
        this.japanese=japanese;
    }
}

let xiaoming=new TestScore();
xiaoming.setData("小明",92,87,74);
xiaoming.printScore();

let xiaoming1=new TestScore();
xiaoming1.setData("小红",79,95,83);
xiaoming1.printScore();


