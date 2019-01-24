class BMI{
    constructor(height=0,weight=0){
        this.weight=weight;
        this.height=height;
    }

    getBMI(){
        let bmi=this.weight/Math.pow(this.height/100,2);
        bmi=bmi*10;
        bmi=Math.round(bmi);
        bmi=bmi/10;
        return bmi;
    }
}