function solve (text) {
    let pattern = /\d+/g;
    let result=JSON.stringify(text);

    console.log(result.match(pattern).join(' '));
}
solve(['The300 What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);