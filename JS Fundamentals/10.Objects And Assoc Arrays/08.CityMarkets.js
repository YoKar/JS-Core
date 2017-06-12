function solve(strArr) {
    let summary = new Map();
    for(let row of strArr){
        let [town,product,sales] = row.split(' -> ');
        sales=sales.split(' : ').reduce((a,b) => a*b);
       if(!summary.has(town)){
           summary.set(town,new Map());
       }
       if(!summary.get(town).has(product)){
           summary.get(town).set(product,0)
       }
        let oldSalse =summary.get(town).get(product);
       summary.get(town).set(product,oldSalse+sales);

    }

    for(let [town,product] of summary){
        console.log(`Town - ${town}`);
        for(let [products, sales] of product){
            console.log(`$$$${products} : ${sales}`);

        }
    }
     }
solve(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3',]);