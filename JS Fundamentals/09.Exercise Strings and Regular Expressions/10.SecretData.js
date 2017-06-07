function solve(array) {
    let text = array.join('\n');

    let nameRegex = /(\*[A-Z][a-z]*)(?=\s|$)/g;
    let phoneRegex = /(\+[\d-]{10})(?=\s|$)/g;
    let baseRegec = /([\_\!][A-Za-z0-9]+)(?=\s|$)/g;

    text = text.replace(nameRegex,replacer);
    text = text.replace(phoneRegex, replacer);
    text = text.replace(baseRegec, replacer);
    return text;

    function replacer(match, gr1) {
        return "|".repeat(gr1.length);
    }
}
console.log(solve(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    `I can't really remember...`,
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    `I really don't know what happened there.`,
    `This is all I saw, that night.`]));;