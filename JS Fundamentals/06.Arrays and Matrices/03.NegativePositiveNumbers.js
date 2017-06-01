function negativeOrPositive(arr) {
    let result = [];
    for(let e of arr){
        if(e<0){
            result.unshift(e);
        }
        else{
            result.push(e);
        }
    }
    for(let k of result){
        console.log(k);
    }
}
negativeOrPositive([3, -2, 0, -1]);