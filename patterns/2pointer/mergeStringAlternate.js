/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let left = 0
    let right = 0
    let res = ''
    while( left < word1.length && right < word2.length){
        res += word1[left]
        res += word2[right]
        left += 1
        right += 1
    }

    if(left <= word1.length){
        res += word1.slice(left)
    }
    if(right <= word2.length){
        res += word2.slice(right)
    }

    return res

};

console.log(mergeAlternately('abc','pqrabc'))
