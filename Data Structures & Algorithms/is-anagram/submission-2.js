class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if(s.length !== t.length) return false;
        
        // const wordMap = new Map();
        // for(let i = 0; i < s.length; ++i){
        //     wordMap.set(s[i], (wordMap.has(s[i]) || 0 ) + 1);
        // }

        // for(let i = 0; i < t.length; ++i){
        //     if(!wordMap.has(t[i])){
        //         return false
        //     } else {
        //         wordMap.set(t[i], wordMap.get(t[i]) - 1)
        //     }
        // }

        // for (const value of wordMap.values()){
        //     if(value < 0) {
        //         return false;
        //     }
        // }

        // return true;

        if (s.length !== t.length) return false;

    const map = new Map();

    // Step 1: Count chars in s
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Step 2: Subtract using t
    for (const char of t) {
        if (!map.has(char)) return false;

        map.set(char, map.get(char) - 1);

        if (map.get(char) === 0) {
            map.delete(char); // optional cleanup
        }
    }

    // Step 3: Check if empty
    return map.size === 0;
    }
}
