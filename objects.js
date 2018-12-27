let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

let anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({
    x: 0,
    y: 0,
    z: 2
}));

let objectA = {
    a: 1,
    b: 2
};
Object.assign(objectA, {
    b: 3,
    c: 4
});
console.log(objectA);

let journal = [{
        events: ["work", "touched tree", "pizza",
            "running", "television"
        ],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"
        ],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break",
            "beer", "blabla"
        ],
        squirrel: true
    }
];

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
     Math.sqrt((table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]));
}

console.log(phi([76,9,4,1]));

function tableFor(event,journal){
    let table =[0,0,0,0];
    for(let i=0;i<journal.length;i++){
        let entry=journal[i],index=0;
        if(entry.events.includes(event)) index +=1;
        if(entry.squirrel) index+=2;
        table[index]+=1;
    }
    return table;
}

require('./journal.js')
console.log(tableFor("pizza",JOURNAL));

function max(...numbers){
    let result= -Infinity;
    for(let number of numbers){
        if(number > result) result=number;
    }
    return result;
}
console.log(max(4,1,9,-2));

let numbers = [5, 1, 7];
console.log(max(3,...numbers,2));



let string=JSON.stringify({squirrel:false,events:["weekend"]});
console.log(string);
console.log(JSON.parse(string).squirrel);