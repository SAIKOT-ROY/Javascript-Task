function findTwoIndices(sorted, target){
    let leftNum = 0;
    let rightNum = sorted.length - 1;

    while(leftNum < rightNum){
        const currentSum = sorted[leftNum] + sorted[rightNum];

        if(currentSum === target){
            return [leftNum, rightNum]
        }else if(currentSum < target){
            leftNum++
        }else{
            rightNum--;
        }
    }
    return null;
}

const sortedArray = [2, 4, 6, 8, 10, 12];
const targetValue = 16;
const result = findTwoIndices(sortedArray, targetValue);
console.log(result);