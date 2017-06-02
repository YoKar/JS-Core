function rotateArray(arr) {
    let rotateTimes = arr.pop();

    for(let i =0;i<rotateTimes%arr.length;i++){
        let last = arr.pop();

        arr.unshift(last);
 }
    console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange','Coconut', 'Apple', 15])