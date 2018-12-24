/*
Starting from number 1 and repeatedly add 5 or multiplying by 3, an infinite set of numbers can be produced.
How would you write a function that, given a number, tried to find a sequence of such additions and 
multiplications that produce the number?
*/

function findSolution(target) {
    function find(current, history,level) {
        console.log(level+" find("+current+","+history+")...");
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else if (current < target) {
            return find(current + 5, `(${history}+5)`,level++) ||
                find(current * 3, `(${history}*3)`,level++);
        }
    }
    return find(1, "1",0);
}
result=findSolution(13);
console.log(result);