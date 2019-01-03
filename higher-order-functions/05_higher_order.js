function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");
  
  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";
  
  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

require('./scripts.js')
function filter(array,test){
  let passed=[];
  for(let element of array){
    if(test(element)){
      passed.push(element);
    }
  }
  return passed;
}

// console.log(filter(SCRIPTS,script => script.living));

function map(array, transform) {
  let mapped = [];
  for(let element of array){
    mapped.push(transform(element));
  }
  return mapped;
}
// let rtlScripts=SCRIPTS.filter(s=>s.direction=="rtl");
// console.log(map(rtlScripts,s=>s.name));

function reduce(array, combine, start){
  let current=start;
  for(let element of array){
    current=combine(current,element);
  }
  return current;
}

console.log(reduce([1,2,3,4],(a,b)=>a+b,0));
console.log([1,2,3,4].reduce((a,b)=>a+b));

function characterCount(script){
  return script.ranges.reduce((count,[from,to])=>{
    return count+(to-from)
  },0);
}

console.log(SCRIPTS[0].ranges);
console.log(SCRIPTS.reduce((a,b)=>{
  return characterCount(a)<characterCount(b)?b:a;
}));

let biggest = null;
for(let script of SCRIPTS){
  if(biggest == null ||
    characterCount(biggest)<characterCount(script)){
      biggest = script;
    }
}
console.log(biggest);

function average(array){
  return array.reduce((a,b)=>a+b)/array.length;
}
console.log(Math.round(average(SCRIPTS.filter(s=>s.living).map(s=>s.year))));
console.log(Math.round(average(SCRIPTS.filter(s=>!s.living).map(s=>s.year))));

function characterScript(code){
  for(let script of SCRIPTS){
    if(script.ranges.some(([from,to])=>{
      return code >= from && code < to;
    })){
      return script;
    }
  }
  return null;
}
console.log(characterScript(121));

//Two emoji characters, hose and shoe
let horseShoe="🐴👟"
console.log(horseShoe.length)

console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(0));
console.log(horseShoe.codePointAt(0));

let roseDragon="🌹🐉";
for(let char of roseDragon){
  console.log(char);
}

function countBy(items,groupName){
  let counts = [];
  for(let item of items){
    let name=groupName(item);
    let known = counts.findIndex(c=>c.name==name);
    if(known==-1){
      counts.push({name,count:1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1,2,3,4,5],n=>n%4));

function textScripts(text){
  let scripts = countBy(text,char =>{
    let script=characterScript(char.codePointAt(0));
    return script?script.name:"none";
  }).filter(({name})=>name!="none");
  
  let total = scripts.reduce((n,{count})=>n+count,0);
  if(total==0) return "No scripts found";

  return scripts.map(({name,count})=>{
    return `${Math.round(count * 100/total)}% ${name}`;
  }).join(",");
}
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));