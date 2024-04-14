var a = "hello world world!";
var b;

b = a.toUpperCase();
b = a.toLowerCase();
b = a.trim();               //remove first and last whitespaces
b = a.split(" ");           //Array ['hello', 'world', 'world!'] 
b = a.replace("!", "?");    //hello world world?
b = a.charAt(0);            //h
b = a.indexOf("world");     //6 search first word
b = a.lastIndexOf("world"); //12 search last word
b = a.substring(0, 5);      //hello
b = a.slice(0, 5);          //hello
b = a.startsWith("hello");  //true
b = a.endsWith("world!");   //true
b = a.includes("world");    //true check if contain word     

console.log(b);