let jobs=new Date(2011,9,5);
let jobsMills=jobs.getTime();

let now=new Date();
console.log("现在的时间:"+now.toLocaleString());

let nowMills=now.getTime();
let diffMills=nowMills-jobsMills;
let diffDate=diffMills/(1000*60*60*24);
console.log("工作天："+Math.floor(diffDate)+"日");
