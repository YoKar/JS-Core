function furstNlastN(arr) {
    let k =arr[0];
    let first =arr.slice(1, k+1);
    let last = arr.slice(arr.length-k , arr.length);
    console.log(first.join(' '));
    console.log(last.join(' '));
}
furstNlastN([2, 7, 8, 9]);