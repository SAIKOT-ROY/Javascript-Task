function reverseStr(str) {

    const length = str.length
    let revStr = '';

    for(let i = length -1; i >= 0; i--){
        revStr += str[i];
    }
    return revStr
}

const test = "hello world";
const result = reverseStr(test);
console.log(result);