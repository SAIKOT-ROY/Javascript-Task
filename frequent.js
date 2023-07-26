const frequentNum = () => {
    const arrayOfNum = [3, 5, 2, 5, 3, 3, 1, 4, 5];

    const newNumber = []
    
    for(let i = 0; i < arrayOfNum.length; i++){
        const num = arrayOfNum[i];
        newNumber[num] = (newNumber[num] || 0) + 1;
    }
    let mostFrequent
    let highestOccurrence = 0;

    for (const num in newNumber){
        if(newNumber[num] > highestOccurrence){
            mostFrequent = num;
            highestOccurrence = newNumber[num];
        }
    }
    return parseInt(mostFrequent)
}

const result = frequentNum();
console.log(result)