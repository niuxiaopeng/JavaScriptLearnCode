let nameList=["松田","田中","中山","山本","本田"];
let nameListStr=nameList.toString();
console.log(nameListStr);
let nameIdx=nameList.indexOf("中山");
console.log("中山的下标"+nameIdx);
nameIdx=nameList.indexOf("江口");
console.log("江口的下标"+nameIdx);
let includeResult=nameList.includes("江口");
console.log("包含江口这个人吗？"+includeResult);

