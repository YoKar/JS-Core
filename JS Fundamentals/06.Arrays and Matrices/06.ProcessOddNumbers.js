function oddNumbers(arr) {
    let theNums = arr.filter((e,i)=>i%2!=0).map(a=>a*2).reverse();
    console.log(theNums);
}
oddNumbers([3, 0, 10, 4, 7, 3]);