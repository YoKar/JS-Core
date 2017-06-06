function solve(textJS) {
    let result = textJS.split(/[\s.();,]+/);
    console.log(result.join('\n'));
}
solve('let sum = 4 * 4,b = "wow";');