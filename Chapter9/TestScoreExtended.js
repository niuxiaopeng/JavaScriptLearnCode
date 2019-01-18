class TestScoreExtended extends TestScoreWithConstructor{
    constructor(name="",english=0,math=0,japanese=0,science=0,social=0){
        super(name,english,math,japanese);
        this.science=science;
        this.social=social;
    }

    calcTotalScore(){
        let sum3=this.calcSum();
        let total=sum3+this.science+this.social;
        return total;
    }

    calcTotalAve(){
        return this.calcTotalScore()/5;
    }

    printScore(){
        super.printScore();
        console.log(this.name+"的五科成绩总分："+this.calcTotalScore()+"  平均分"+this.calcTotalAve());
    }
}