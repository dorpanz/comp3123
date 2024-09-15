//exercise 1
const capFirstLet = (str) => {
    const words = str.split(" ");
    const capWords = words.map ((word)=> {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    return capWords.join(' ');
} 
const example = "scooby dooby doo";
console.log(capFirstLet(example));

//exercise 2
function max(num1, num2, num3) {
    let bigInt;
    if (num1 >= num2 && num1 >= num3) {
        bigInt = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        bigInt = num2;
    } else {
        bigInt = num3;
    }
    return bigInt;
}
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

//exercise 3
const right = (str) => {
    if (str.length < 3) {
        return str;
    }
    let lastThreeChars = str.slice(-3);
    let remainingStr = str.slice(0, -3);
    return lastThreeChars + remainingStr;
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//excerise 4
function angle_Type(angle) {
    if (angle < 0 || angle > 180) {
        return "Invalid";
    }

    if (angle === 0) {
        return "Zero angle";
    } else if (angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))