
// Alphabets has IISC code from 097-a to 122-z
// Alphabets has IISC code from 065-A to 90-Z


const num= "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

function maxComb(){
    const digitsMap =  mapDigits();
    const arr = getDigits(num);
    const len = arr.length
    if(!len) return [];
    if(arr.length == 1) return digitsMap.get(arr[0]);
    let ans = []
    const recursive = (pos,str) => {
            if(pos == len) ans.push(str);
            else {
                let letters = digitsMap.get(arr[pos]);
                for(let i = 0; i < letters.length; i++)
                    recursive(pos + 1 , str + letters[i]);
            }
    }
    recursive(0,'')
    return ans;
}

function mapDigits(){
    const digitsMap = new Map();
    var j = 97
    var k = 97
    for(i = 2; i < 10; i++) {
        if(i == 7 || i == 9) {
                while(j < k + 4) {
                    if(!digitsMap.get(i)) digitsMap.set(i,[]);
                        digitsMap.get(i).push(String.fromCharCode(j));
                        j++
                }
        } else {
                while(j < k + 3){
                    if(!digitsMap.get(i)) digitsMap.set(i,[]);
                    digitsMap.get(i).push(String.fromCharCode(j));
                    j++
                }
        }
        k = j;
    }
    return digitsMap;
}

function getDigits(num){
    var arr = [];
    while(Math.floor(num) > 0){
        arr.push( Math.floor(num%10));
        num /= 10
    }
    return arr.reverse();
}

console.log(maxComb());