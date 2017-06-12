function solve(arr) {
    let result=[];
    for(let e of arr.slice(1)){
        let towns = e.split('|').filter(e=>e!='');
        let town =towns[0].trim();
        let lati =Number(towns[1].trim());
        let long = Number(towns[2].trim());
        let obj={Town:town,Latitude:lati,Longitude:long};
        result.push(obj);

    }
    console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);