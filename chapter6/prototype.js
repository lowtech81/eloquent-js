console.log(Object.getPrototypeOf({})==Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max)==Function.prototype);
console.log(Object.getPrototypeOf([])==Array.prototype);

let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type="killer";
killerRabbit.speak("SKREEEE!");

//make object with constructor
function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type=type;
    return rabbit;
}

//make object with "new" keyword
function Rabbit(type){
    this.type=type;
}
Rabbit.prototype.speak=function(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weiredRabbit =new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit)==Function.prototype);
console.log(Object.getPrototypeOf(weiredRabbit)==Rabbit.prototype);

//class notation
class NewRabbit{
    constructor(type){
        this.type=type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}`);
    }
}
killerRabbit=new NewRabbit("killer");
let blackRabbit=new NewRabbit("black");

let object=new class{getWord(){return "hello";}};
console.log(object.getWord());