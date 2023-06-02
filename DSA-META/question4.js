// Create a class that accepts two numbers. 
// Create another class that fetches the last digit of those two numbers.
//  Create a third class that multiplayer that last two digits.
// Example: Class A: Accept two numbers.
// 		    Class B: Fetches the last digits of the numbers
// 		    Class C: Multiplay the last two digits.

//1
class NumberInput {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
}

//2
class LasDigit {
    static getLastDigit(number) {
        return number % 10;
    }
}

//3
class multiplier {
    static multiplyDigits(digit1, digit2) {
        return digit1 * digit2;
    }
}

//INPUTS

const numberinput = new NumberInput(123, 456);

const lastDigit1 = LasDigit.getLastDigit(numberinput.num1);

const lastDigit2 = LasDigit.getLastDigit(numberinput.num2);

const output = multiplier.multiplyDigits(lastDigit1, lastDigit2);

console.log(lastDigit1);
console.log(lastDigit2);
console.log(output);
