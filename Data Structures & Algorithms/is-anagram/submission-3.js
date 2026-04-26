class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const wordMap = new Map();
        for(let i = 0; i < s.length; ++i){
            wordMap.set(s[i], (wordMap.get(s[i]) || 0 ) + 1);
        }

        for(let i = 0; i < t.length; ++i){
            if(!wordMap.has(t[i])){
                return false
            } else {
                wordMap.set(t[i], wordMap.get(t[i]) - 1)
            }
        }

        for (const value of wordMap.values()){
            if(value < 0) {
                return false;
            }
        }

        return true;
    }
}
