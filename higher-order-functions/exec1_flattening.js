let arrays=[[1,2,3],[4,5],[6]];

console.log(arrays.reduce((flattened,current)=>flattened.concat(current),[]));