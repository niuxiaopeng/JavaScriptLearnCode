let jobs=new Date(2011,8,4);
console.log("工作日："+jobs.toDateString());
console.log("工作日："+jobs.toLocaleDateString());

let month=jobs.getMonth();
jobs.setMonth(month+1);
console.log("1个月之后："+jobs.toLocaleDateString());

let date=jobs.getDate();
jobs.setDate(date-6);
console.log("6天前:"+jobs.toLocaleDateString());

// 这么写会有错误！
// jobs=new date(2018,1,30,14,30,5);
jobs=new Date(2018,1,30,14,30,56);
console.log("工作日："+jobs.toTimeString());
console.log("工作日："+jobs.toDateString());
console.log("工作日："+jobs.toLocaleDateString());
console.log("工作日："+jobs.toLocaleTimeString());

// 这么写会有错误！
// jobs=new date("2002/2/2 20:23:443");
jobs=new Date("2002/2/2 20:23:4:445");
console.log("工作日："+jobs.toTimeString());
console.log("工作日："+jobs.toDateString());
console.log("工作日："+jobs.toLocaleDateString());
console.log("工作日："+jobs.toLocaleTimeString());

