class Vec{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    plus(vector){
        return new Vec(this.x+=vector.x,this.y+=vector.y);
    }
    minus(vector){
        return new Vec(this.x-=vector.x,this.y-=vector.y);
    }
    get length(){
        let x=this.x,y=this.y;
        return Math.sqrt(x*x+y*y);
    }
}
// const toStringSymbol=Symbol("toString");
// Vec.prototype[toStringSymbol]=function(){
    // return `Vec{x: ${this.x}, y: ${this.y}}`;
// };
console.log(new Vec(1,2).plus(new Vec(2,3)));
console.log(new Vec(1,2).minus(new Vec(2,3)));
console.log(new Vec(3,4).length);