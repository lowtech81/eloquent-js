function reverseArray(array){
    let result=[],element=null,loop=array.length;
    for(let i=loop-1;i>=0;i--){
        element=array[i];
        result.push(element);
    }
    return result;
}

function reverseArrayInplace(array){
    let element=null,loop=array.length;
    for(let i=0;i<Math.floor(loop/2);i++){
        element=array[i];
        array[i]=array[loop-1-i];
        array[loop-1-i]=element;
    }
}

console.log(reverseArray(["A","B","C"]));
let arrayValue=[1,2,3,4,5,6,7,8];
reverseArrayInplace(arrayValue);
console.log(arrayValue);