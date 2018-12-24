// Define f to hold a function value
const f = function(a) {
    console.log(a + 2);
  };
  
  // Declare g to be a function
  function g(a, b) {
    return a * b * 3.5;
  }
  
  // A less verbose function value
let h = a => a % 3;

console.log(h(11));

const power = (base,exponent)=>{
    let result=1;
    for(let count=0;count<exponent;count++){
       result*=base; 
    }
    return result;
};
console.log(power(2,10));

const square1=(x)=>{return x*x};
const square2=x=>x*x;
let x=12;
console.log(square1(x));
console.log(square2(x));

const horn=()=>{
    console.log("Toot");
};
horn();

function chicken() {
    return egg();
  }
  function egg() {
    return chicken();
  }
console.log(chicken() + " came first.");