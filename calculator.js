function simpleCalc(num1, num2, operator){
    if(operator === "+"){
        return num1 + num2
    }
    else if(operator === "-"){
        return num1 - num2
    }
    else if(operator === "*"){
        return num1 * num2
    }
    else if(operator === "/"){
        if(num2 === 0){
            return "Error: Cannot Divided By Zero"
        }
        return num1 / num2
    } else{
        return "Error: Invalid operator"
    }
    
}

console.log(simpleCalc(5, 2, '+'));
console.log(simpleCalc(5, 2, '-')); 
console.log(simpleCalc(5, 2, '*')); 
console.log(simpleCalc(5, 2, '/')); 
console.log(simpleCalc(5, 0, '/')); 
console.log(simpleCalc(5, 2, '%'));