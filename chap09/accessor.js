class AccesssorProp{
    constructor(lastName,firstName){
        this.lastName=lastName;
        this.firstName=firstName;
    }

    get name(){
        return this.lastName+this.firstName;
    }

    set extName(value){
        this.lastName=value;
        this.firstName=value;
    }
}

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