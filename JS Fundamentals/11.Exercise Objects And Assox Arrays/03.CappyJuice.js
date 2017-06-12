function solve(arr) {
    let result = new Map();
    for(let i=0;i<arr.length;i++){
        let tokens = arr.split(' => ').filter(e=>e!='');
        let fruit = tokens[0];
        let quantity = Number(tokens[1]);
        if(!result.has(fruit)){
            fruit.set(fruit,0)
        }
        fruit.get(fruit)+=quantity;
    }
}
