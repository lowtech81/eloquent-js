//testing for matches

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

//sets of characters

console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

// \d \w \s \D \W \S .

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("20-jan-2003 15:20"));

//invert a set of characters

let notBinary = /[^01]/
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

dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));

//grouping subexpressions

let cartoonCrying = /boo+(hoo+)+/i; //the i makes expression case insensitive
console.log(cartoonCrying.test("Booooooohoooohoohooo"));

//matches and groups

let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

//the date class
console.log(new Date());
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013, 11, 19).getTime());
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
console.log("papa".replace("p", "m"));
console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));

console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1"));

let stock = '1 lemon, 2 cabbages, and 101 eggs';

function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) {
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

//greed(+?,*?,??,{}? plus ? become nongreedy)

function stripComments(code) {
    // return code.replace(/\/\/.*|\/\*[^]*\*\//g,"");//greedy
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, ""); //nongreedy
}
console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x=10; //ten!"));
console.log(stripComments("1 /* a */ + /* b */ 1"));

//dynamically creating regexp objects

let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

let name_1 = "dea+hl[]rd"; //deathlord
let text_1 = "This dea+hl[]rd guy is super annoying.";
let escaped = name_1.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp_1 = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text_1.replace(regexp_1, "_$&_"));

// the search method

console.log("  word".search(/\S/));
console.log("     ".search(/\S/));

// the lastIndex property

let pattern = /y/g;
pattern.lastIndex = 0;
let match_1 = pattern.exec("xyzzy");
console.log(match_1.index);
console.log(pattern.lastIndex);
match_1 = pattern.exec("xyzzy")
console.log(match_1.index);
console.log(pattern.lastIndex);

let global = /abc/g;
console.log(global.exec("xyz abc"));
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));

console.log("Banana".match(/an/g));

// looping over matches

let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match_2;
while (match_2 = number.exec(input)) {
    console.log("Found", match_2[0], "at", match_2.index);
}

// Fill in the regular expressions

verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/ferr[^u]/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/\b.*cious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s\./,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/^h\S*$/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/(r.*s)|(w.*t)/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes)
        if (!regexp.test(str)) {
            console.log(`Failure to match '${str}'`);
        }
    for (let str of no)
        if (regexp.test(str)) {
            console.log(`Unexpected match for '${str}'`);
        }
}

// Fill in this regular expression.
let number_1 = /^[+-]?(([0-9]+)\.?([0-9]*)?|([0-9]*)?\.?[0-9]+)([eE][+-]?[0-9]+)?$/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
        "1.3e2", "1E-4", "1e+12"
    ]) {
    if (!number_1.test(str)) {
        console.log(`Failed to match '${str}'`);
    }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
        ".5.", "1f5", "."
    ]) {
    if (number_1.test(str)) {
        console.log(`Incorrectly accepted '${str}'`);
    }
}