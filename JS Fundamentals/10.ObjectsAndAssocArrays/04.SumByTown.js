function solve(arr) {
    let towns ={};
    for(let i =0;i<arr.length;i+=2) {
        let town=arr[i];
        let value = arr[i+1];
        if (!towns.hasOwnProperty(town)) {
            towns[town]=0;
        }
        towns[town]+=Number(value)
    }
    console.log(JSON.stringify(towns));
}
solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);