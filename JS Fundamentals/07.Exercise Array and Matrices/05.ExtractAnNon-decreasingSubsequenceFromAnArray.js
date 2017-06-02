function decreasingNumbers(arr) {
    let nexNum = Number.NEGATIVE_INFINITY;
    let resultArr=[];
    for (let i=0;i<arr.length;i++){
        if(arr[i]>=nexNum){
            resultArr.push(arr[i]);
            nexNum=arr[i];
        }
    }
    console.log(resultArr.join('\n'));
}
decreasingNumbers([1,3,8,4,10,12,3,2,24]);