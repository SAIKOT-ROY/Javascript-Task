function romanNumber(romanInt) {
    const romanValues = {"I": 1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}

    let total = 0;
    let prevValue = 0;

    for (let i = romanInt.length - 1; i >= 0; i--){
        const currentNum = romanInt[i];
        const currentValue = romanValues[currentNum];

        if(currentValue >= prevValue){
            total += currentValue;
        }
        else{
            total -= currentValue;
        }
        prevValue = currentValue
    }

    return total
}

console.log(romanNumber("IX"));
console.log(romanNumber("XXI")); 
console.log(romanNumber("IV"));   
console.log(romanNumber("XLII"));
console.log(romanNumber("MCMXCIV")); 