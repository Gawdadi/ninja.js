// Longest Substring Without Repeating Characters

const string = "abcd!cder"
//Ouput : 5

const string = "dvdf"
//Ouput : 3

/**
 * @return {number}
 */

var lengthOfLongestSubstring = function() {
    if(string.length == 1) return 1;
    if(string.length == 0) return 0;
    let max = 0;
    let strHashMap = new Map();
  
    for (let i = 0; i < string.length; i++) {
        const elem = string.charAt([i]);
        if(!strHashMap.has(elem)) strHashMap.set(elem,i) 
        else
            {
             i = strHashMap.get(elem);
             strHashMap.clear();
        }
        max = Math.max(max,strHashMap.size)
    }
      return max;
};

console.log(lengthOfLongestSubstring());