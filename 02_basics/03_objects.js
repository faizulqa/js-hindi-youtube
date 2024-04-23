

const JsUser = { //Is object me function add karna hai toh..
    name: "Hitesh",
    age: 18,
    email: "hitesh@google.com",
}

JsUser.greeting = function(){  //Aise add karenge function.. aur
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){ //Object ke andar kisi particular key ko reference karna h toh.
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());