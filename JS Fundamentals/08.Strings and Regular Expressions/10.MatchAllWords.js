function matchWord (text) {
    let pattern = /\w+/g;
    let result = text.match(pattern);
    console.log(result.join('|'));
}
matchWord('A Regular Expression needs to have the global flag in order to match all occurrences in the text');