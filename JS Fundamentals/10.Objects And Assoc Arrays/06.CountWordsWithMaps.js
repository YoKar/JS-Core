function solve(arr) {
    let pattern =/\W+/g;
    arr=arr.join().toLowerCase().split(pattern).filter(e=>e!='');

    let map = new Map();
    for (let elements of arr){
        if(!map.has(elements)){
            map.set(elements,0);
        }
        map.set(elements,map.get(elements)+1)

    }
    let allMap = Array.from(map.keys()).sort();

    allMap.forEach(w => console.log(`'${w}' -> ${map.get(w)} times`))
}
solve([`Far too slow,you're far too slow.`]);