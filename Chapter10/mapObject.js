let studentNumList=new Map();

studentNumList.set("A",30);
studentNumList.set("B",31);
studentNumList.set("C",32);
studentNumList.set("D",29);
studentNumList.set("E",54);
studentNumList.set("E",54);

let count=studentNumList.size;
console.log("元素个数"+count);

let studentNumC=studentNumList.get("C");
console.log("C组的人数"+studentNumC);

for(let [key,value] of studentNumList){
    console.log("key值"+key+"  值是"+value);
}