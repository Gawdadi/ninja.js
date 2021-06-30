
const roman = "MCMXCIV"
// Output : 1994

// const roman = "LVIII"
// Output : 58

/**
 * @param {string} s
 * @return {number}
 */

 var romanToInt = function() {
    const len = roman.length;
    const map ={ I:1,V:5,X:10,L:50,C:100,D:500,M:1000 }
    if (len == 1) return map[s[0]];
    let  sum = 0
    for(i = 0; i < len; i++){
        const curr = map[roman[i]];
        const prev = map[roman[i-1]];
       if(curr > prev){
           // Use to negate previous added value and then 
           // subtract from curr. IX = 1 + 5 - 2 = 4
                sum += curr - 2*prev
       } else {
           sum += curr
       }
    }
    return sum;
};

console.log(romanToInt())

