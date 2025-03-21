console.log(hasStringAtEnd('hello', 'llo')); // true
console.log(hasStringAtEnd('llo', 'hello')); // true
console.log(hasStringAtEnd('llod', 'hello')); // false
console.log(hasStringAtEnd('ll', 'hello')); // false
console.log(hasStringAtEnd('llo', 'hellod')); // false

function hasStringAtEnd(a, b) {
    // Check if the target string is at the end of str
    let shortest = '';
    let longest = '';
    if (a.length > b.length) {
        shortest = b;
        longest = a;
    } else {
        shortest = a;
        longest = b;
    }
    
    const indexStart = longest.length - shortest.length;
    const endOfLongest = longest.substring(indexStart);
    return shortest === endOfLongest;
}