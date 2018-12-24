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