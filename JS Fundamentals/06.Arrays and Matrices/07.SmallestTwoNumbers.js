function smallestNums(arr) {
    let smallNums = arr.sort((a,b)=>a-b);
    console.log(smallNums.slice(0,2).join(" "));
}
smallestNums([30, 15, 50, 5]);