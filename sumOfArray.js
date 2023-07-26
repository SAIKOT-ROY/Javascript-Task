function sumOfAll(){
    const number = [2, -5, 10, -3, 7];

    let sum = 0;

    for (let i = 0; i < number.length; i++){
            const singleNumber = number[i]
            if(singleNumber > 0) {
                sum += singleNumber
            }
    }
    return sum;
}

const result = sumOfAll();
console.log(result);