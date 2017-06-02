function addOrRemove(arr) {
    let result = [];

    for(let i =0 ;i<arr.length;i++){
        if(arr[i]=="add"){
            result.push(i+1);

        }
        else if(arr[i]=="remove"){
            result.pop()
        }
    }


    if(result.length==0){
        console.log('Empty');
    }
    else{
        console.log(result.join('\n'));
    }



}
addOrRemove(['remove', 'remove','remove', 'remove','remove']);