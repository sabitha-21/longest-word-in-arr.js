function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


let result = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log("The string:The quick brown fox jumped over the lazy dog")
console.log("The largest word:"+result);