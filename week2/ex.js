//EXERCISE 1
const greeter = (myArray) => {
    const greetText = `Hello `;
    for (const name of myArray)
        console.log(`${greetText}${name }`);
}
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

//EXERCISE 2
const capitalize = (word) => {
    let [first, ...rest] = word;
    first = first.toUpperCase();
    rest = rest.join('').toLowerCase();
    return first + rest;
}
console.log(capitalize("appLe")); 

//EXERCISE 3
const colors = ['red' , 'green' , 'blue']
const capitalizedColors = colors.map(color => {
    return capitalize(color)
})
console.log(capitalizedColors)

//EXERCISE 4
var values = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = values.filter(value =>{
    return value < 20
})
console.log(filterLessThan20)

//EXERCISE 5
var array = [1, 2, 3, 4]
const calculateSum = array.reduce((sum, currVal)=>{
    return sum + currVal
})
const calculateProduct = array.reduce((product, currVal)=>{
    return product * currVal
})
console.log(calculateSum)
console.log(calculateProduct)

//EXERCISE 6
class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} Engine ${this.year}`
    }
}
const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details())

class Sedan extends Car {
    constructor(model, year,balance) {
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`
    }
}
const sedan = new Sedan('Volvo SD' , 2018, 30000);
console.log(sedan.info())