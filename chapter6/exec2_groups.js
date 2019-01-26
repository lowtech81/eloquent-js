class Group {
    constructor(){
        this.members=[];
    }
    has(element){
        return this.members.includes(element);
    }
    add(element){
        if(!this.has(element))
            this.members.push(element);
    }
    delete(element){
        this.members=this.members.filter(v=>v!==element);
    }
    static from(iterable){
        let group=new Group;
        for(let value of iterable){
            group.add(value);
        }
        return group;
    }
}

class GroupIterator {
    constructor(group){
        this.group=group;
    }
    
}
let group=Group.from([10,20]);
console.log(group.has(10));
// -> true
console.log(group.has(30));
// -> false
group.add(10);
group.delete(10);
console.log(group.has(10));
// -> false