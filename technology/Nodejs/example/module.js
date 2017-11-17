// class Age {
//     constructor(age) {
//         this.age = age;
//     }
//     setAge(age) {
//         this.age = age;
//     }
//     getAge() {
//         return this.age;
//     }
// }
// exports.Age = Age;
// var str = '123';
// var str2 = '234';
// module.exports = str;
// module.exports.str2 = str2;

var counter  = 0;
module.exports = function(){
    counter += 10;
    this.printNextCount = function()
    {
        console.log(counter);
    }
}
exports.temp2 = function(){
    counter += 10;
    this.printNextCount = function()
    {
        console.log(counter);
    }
};
var isEq = (exports === module.exports);
console.log(exports);
console.log(module.exports);
console.log(isEq);


