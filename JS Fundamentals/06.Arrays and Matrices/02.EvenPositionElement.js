function evenPosition(arr) {
    let evens = [];
   for(let e in arr){
       if(e%2==0){
           evens.push(arr[e]);
       }
   }
    console.log(evens.join(' '));
}
evenPosition(['20', '30', '40']);