function reverse(arr) {
    let string = arr.join('');
    let arrey = Array.from(string).reverse().join('');
    console.log(arrey);
}
reverse(['I', 'am', 'student']);