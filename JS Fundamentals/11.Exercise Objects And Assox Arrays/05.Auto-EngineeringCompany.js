function solve(arr) {
     let resultMap = new Map();
     for(let row of arr){
         let [carBrand , carModel ,producedPrice] = row.split(' | ').filter(e=>e!='');
         producedPrice=Number(producedPrice);
         if(!resultMap.has(carBrand)){
             resultMap.set(carBrand,new Map());
         }
         if(!resultMap.get(carBrand).has(carModel)){
             resultMap.get(carBrand).set(carModel,0)
         }
       let oldPrice=  resultMap.get(carBrand).get(carModel);
         resultMap.get(carBrand).set(carModel,oldPrice+producedPrice);
     }
    for(let [brand , model] of resultMap){

        console.log(brand);
        for(let [models , price] of model){
            console.log(`###${models} -> ${price}`);
        }
    }

}
solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'

]);