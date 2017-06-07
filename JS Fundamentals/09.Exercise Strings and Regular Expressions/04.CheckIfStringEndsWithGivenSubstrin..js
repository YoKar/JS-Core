function solve(text, word) {
    let result = text.substring(text.length-word.length,text.length);

    return result==word;
}
console.log(solve('This sentence ends with fun?', 'fun?'));;