function loop(start,test,update,body){
    for(let value=start;test(value);value=update(value)){
            body(value);
    }
}
loop(8,n=>n>0,n=>n-1,console.log);
loop("This a string",s=>s.length>0,s=>s.slice(1,s.length),console.log);