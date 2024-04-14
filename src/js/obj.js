//object
var objectPerson = { 
    name: "Nina", 
    age: 65, 
    hobby: "cat",
    nationality: "UK"
};

//constructor
function PersonConstructor(name, age, hobby, nationality){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.nationality = nationality;
}
var objectPerson2 = new PersonConstructor("Elmaz", 18, "instagram", "UA");


/*
console.log(objet1==objet2);
console.log(objet3==objet1);

objet3.age=50;
console.log(objet3==objet1);

console.log(objet1.age);
console.log(objet3.age);

var v1 = "50";
var v2 = v1;
v2="10";
console.log(v1);
console.log(v2);*/