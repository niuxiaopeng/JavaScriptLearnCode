let xiaoming=new TestScoreWithConstructor("武松",92,89,56);
xiaoming.printScore();

let xiaohong=new TestScoreWithConstructor("大朗",89,67,90);
xiaohong.printScore();

xiaohong.science=89;

console.log("大朗的理科分数："+xiaohong.science);
console.log("武松的理科分数："+xiaoming.science);