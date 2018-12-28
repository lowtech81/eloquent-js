/*
Produce an array of whole numbers for given 'start number','end number' and 'step'.
*/
function range(start,end,step) {
    let result=[],theStep=0,number=start;
    if(start<=end){
        theStep=1; 
        if (step != null){
            theStep=step; 
        }
        if(theStep<=0 ){
            console.log("Step must be positive!");
            result=null;
        } else {
            while(number<=end){
                result.push(number);
                number+=theStep;
            }
        }
    } else {
        theStep = -1;
        if (step != null){
            theStep=step; 
        }
        if(theStep>=0 ){
            console.log("Step must be positive!");
            result=null;
        } else {
            while(number>=end){
                result.push(number);
                number+=theStep;
            }
        }
    }
    return result;   
}

/*
Give the sum of an array of numbers. 
*/
function sum(range) {
    let result = null;
    if(range==null){
        console.log("The inputed range is null!");
    } else {
        result=0;
        for (let number of range) {
            result += number;
        }  
    }
    return result; 
}   

console.log(range(1,10));
console.log(sum(range(1,10)));

console.log(range(1,10,3));
console.log(sum(range(1,10,3)));

console.log(range(10,-5,-4));
console.log(sum(range(10,-5,-4)));

console.log(range(5,2));
console.log(sum(range(5,2)));

console.log(range(1,10,-1));
console.log(sum(range(1,10,-1)));

console.log(range(5,2,1));
console.log(sum(range(5,2,1)));
