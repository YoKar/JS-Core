function everyNthElement(arr) {
    let steps = Number(arr.pop());
    let result =[];
    for (let i=0;i<arr.length;i+=steps) {
        result.push(arr[i]);
    }
   for(let e of result){
       console.log(e);
   }
}
everyNthElement(['5','20','31','4','20','2']);