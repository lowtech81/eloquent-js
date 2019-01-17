//testing for matches

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

//sets of characters

console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

// \d \w \s \D \W \S .

let dateTime=/\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("20-jan-2003 15:20"));

//invert a set of characters

let notBinary=/[^01]/
console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));

//repeating parts of a pattern

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

dateTime= /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));

//grouping subexpressions

let cartoonCrying =/boo+(hoo+)+/i;//the i makes expression case insensitive
console.log(cartoonCrying.test("Booooooohoooohoohooo"));

//matches and groups

let match= /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

let quotedText=/'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

//the date class
console.log(new Date());
console.log(new Date(2009,11,9));
console.log(new Date(2009,11,9,12,59,59,999));

console.log(new Date(2013,11,19).getTime());
console.log(new Date(1387382400000));

function getDate(string) {
    let [_, month, day, year] =
      /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
  }
console.log(getDate("1-30-2003"));

//word and string boundaries

console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false

//choice patterns
let animalCount = /^\d+ (pig|cow|chicken)s?$/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));

//the replace method
console.log("papa".replace("p","m"));
console.log("Borobudur".replace(/[ou]/,"a"));
console.log("Borobudur".replace(/[ou]/g,"a"));

console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g,"$2 $1"));

let stock = '1 lemon, 2 cabbages, and 101 eggs';
function minusOne(match, amount, unit){
    amount = Number(amount)-1;
    if(amount == 1){
        unit = unit.slice(0, unit.length-1);
    } else if(amount == 0){
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g,minusOne));
