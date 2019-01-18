class TestScore{
    constructor(){
        this.name="";
        this.english=0;
        this.math=0;
        this.japanese=0;
    }

    setData(name="",english=0,math=0,japanese=0){
        this.name=name;
        this.english=english;
        this.math=math;
        this.japanese=japanese;
    }

    calcSum(){
        let sum=this.english+this.math+this.japanese;
        return sum;
    }

    calcAve(){
        let sum=this.calcSum();
        let ave=sum/3;
        return ave;
    }

    printScore(){
        let sum=this.calcSum();
        let ave=this.calcAve();
        console.log(this.name+"的总分："+sum+"  平均分："+ave);
    }    
}

let xiaoming=new TestScore();
xiaoming.setData("小明",92,87,74);
xiaoming.printScore();

let xiaoming1=new TestScore();
xiaoming1.setData("小红",79,95,83);
xiaoming1.printScore();

let xiaomingSum=xiaoming.calcSum();
let xiaoming1Sum=xiaoming1.calcSum();
let ave2=(xiaomingSum+xiaoming1Sum)/2;
console.log("两个人的总分平均分："+ave2);

let xiaomingAve=xiaoming.calcAve();
let xiaoming1Ave=xiaoming1.calcAve();
ave2=(xiaomingAve+xiaoming1Ave)/2;
console.log("两个人的平均分的平均分："+ave2);


