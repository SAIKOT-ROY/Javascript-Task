function secondSmallest(arr){

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let num of arr){
        if(num < smallest){
            secondSmallest = smallest;
            smallest = num;
        } else if(num < secondSmallest && num !== smallest){
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

const arrayOfNum = [1, 7, 3, 9, 5]
const result = secondSmallest(arrayOfNum)
console.log(result);