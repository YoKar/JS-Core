function printWithDelimeter(arr) {
    let delimiter = arr[arr.length-1];
    let result =[];
    for(let i =0;i<=arr.length-2;i++){
        result.push(arr[i]);
    }
    console.log(result.join(delimiter));
}
printWithDelimeter(['One','Two','Three','Four', 'Five' ,'-']);