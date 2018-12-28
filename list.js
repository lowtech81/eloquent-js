function arrayToList(array){
    let list=null;
    for(let i=array.length-1;i>=0;i--){
        list={value:array[i],rest:list};
    }
    return list;
}

function listToArray(list){
    let array=[];
    for(let node=list;node;node=node.rest){
       array.push(node.value);
    }
    return array;
}

function prepend(element,list){
    let result={value:element,rest:list};
    return result;
}

function nth(list,index){
    let result=null;
    for(let i=0,node=list;i<=index;i++){
        if(node!=null){
            result = node.value;
            node = node.rest;
        } else {
            return undefined;
        }
    }
    return result;
}

function nthRecursive(list,index){
    if(list==null){
        return undefined;
    } else if(index==0){
        return list.value;
    } else {
        return nthRecursive(list.rest,index-1);
    }
}


console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([1,3,5,7,9]), 1));
console.log(nthRecursive(arrayToList([1,3,5,7,9]), 8));