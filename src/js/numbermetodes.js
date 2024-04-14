var a = 10;
var b;
b = a.toFixed(3);   //10.000
b = a.toString();   //"10"
b = parseInt(a);    //convert "10" to 10 
b = a.valueOf();    //appellée par defaut sans l'écrire

console.log(b+2);