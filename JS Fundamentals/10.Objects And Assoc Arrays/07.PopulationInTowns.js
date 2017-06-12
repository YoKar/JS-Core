function population(arr) {

    let map = new Map();

    for(let t=0;t<arr.length;t++){
        let tokens = arr[t].split(/<->/).filter(e=>e!='');
        let town = tokens[0].trim();
        let populations = tokens[1].trim();

       if(!map.has(town)){
           map.set(town,0)
        }
        map.set(town,map.get(town)+Number(populations))
    }

    let allMap = Array.from(map.keys());

    allMap.forEach(t=>console.log(`${t} : ${map.get(t)}`))
}
population(['Istanbul <-> 100000','Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000',
]);