function solve(arr) {
    let initialsMap = new Map();
    for(let row of arr){
        let [product , price] = row.split(/\s:\s/g).filter(e=>e!='');
        let firstLetter = product[0];
        if(!initialsMap.has(firstLetter)){
            initialsMap.set(firstLetter,new Map())
        }
        initialsMap.get(firstLetter).set(product,price)
    }
    let sortedResult = [...initialsMap.entries()].sort(sorted);
    for(let [letters , productMap] of sortedResult){
        let sortedInside = [...productMap.entries()].sort(sorted);
        console.log(letters);
        for(let [name , price] of sortedInside){
            console.log(` ${name}: ${price}`);
        }
    }
    function sorted(a, b) {
       return a[0].localeCompare(b[0])
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'

]);