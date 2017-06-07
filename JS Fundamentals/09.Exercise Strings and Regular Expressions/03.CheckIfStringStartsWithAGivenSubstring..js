function checker(text, word) {
    let result = text.substring(0,word.length);

    return result==word;
}
console.log(checker('The quick brown fox…', 'The quick brown fox…'
));