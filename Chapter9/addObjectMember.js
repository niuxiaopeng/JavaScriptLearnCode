//这个是为了验证继承的类是否可以使用父类的方法,可以找到这个类,看里面的代码就明白了.
let xiaoming=new TestScoreWithConstructor("武松",92,89,56);
xiaoming.printScore();

let xiaohong=new TestScoreWithConstructor("大朗",89,67,90);
xiaohong.printScore();

xiaohong.science=89;

console.log("大朗的理科分数："+xiaohong.science);
console.log("武松的理科分数："+xiaoming.science);