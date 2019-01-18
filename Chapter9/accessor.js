class AccesssorProp{
    constructor(lastName,firstName){
        this.lastName=lastName;
        this.firstName=firstName;
    }

    //get方法只能取值，不能赋值，无法赋值
    get name(){
        return this.lastName+this.firstName;
    }

    //set方法只能赋值,不能取值,如果用set方法取值,会显示取不到值
    set extName(value){
        this.lastName=value;
        this.firstName=value;
    }
}

//下面是实例
let xiaoming=new AccesssorProp("Niu","xiaoming");
console.log("lastName:"+xiaoming.lastName);
console.log("firstName:"+xiaoming.firstName);
console.log("name:"+xiaoming.name);

xiaoming.extName="wangxiaoming";
console.log("lastName:"+xiaoming.lastName);
console.log("firstName:"+xiaoming.firstName);

console.log("extName:"+xiaoming.extName);

xiaoming.name="拼命三郎";
console.log("name:"+xiaoming.name);

xiaoming.lastName="拼命";
xiaoming.firstName="三郎";
console.log("name:"+xiaoming.name);