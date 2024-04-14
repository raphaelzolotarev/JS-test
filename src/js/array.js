/*var a = [10,"a", 3, 50, 60];
console.log(a);

a.push("b");
console.log(a);

a.pop();
console.log(a);

a.shift();
console.log(a);

a.unshift("pink");
console.log(a);

console.log(a.indexOf("pink"));

var b = a.slice(1,3);
console.log(a);

var c = a.splice(1,2,"orange", "dark");
console.log(c);
console.log(a);


console.log(a.join("|"));
console.log(a.sort());
console.log(a.reverse());

console.clear();
let colors = ["red", "green", "blue"];
colors.forEach(
    function(color, index, array) {
        console.log(color, index);
});

let colors2 = colors.map(
    function(color, index, array) {
       return color;
});
console.log(colors2);*/

/*
let numbers = [1, 4, 9];
let sum = numbers.reduce(function(accumulator, num) {
  return accumulator + num;
}, 10);

document.write(sum); // 14*/


let string = "red, green, blue";
let colors = string.split(", ");
console.log(colors); // ["red", "green", "blue"]