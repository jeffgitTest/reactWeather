// var names = ['andrew','mark','jason','mary'];
//
// // names.forEach(function (name) {
// //   console.log('forEach ' + name);
// // });
// //
// // names.forEach((name) =>{
// //   console.log('arrowFunc',name);
// // });
//
// // names.forEach((name) =>console.log(name));
//
// // var returnMe = ((name)=>name);
// // console.log(returnMe('jason'));
//
// var person = {
//   name: 'sonny',
//   greet: function () {
//     names.forEach((name) =>{
//       console.log(this.name + 'say hi to ' + name)
//     });
//   }
// };
//
// person.greet();
// console.log(person.name);

// Challenge Area

// function add(a,b){
//   return a + b;
// }
//
// console.log(add(1,3));
// console.log(add(9,0));

var addStatement = (a, b) =>{
  return a + b;
}

var addExpresstion = (a, b) => a+b;

console.log(addStatement(9,12));
console.log(addExpresstion(15,24));
