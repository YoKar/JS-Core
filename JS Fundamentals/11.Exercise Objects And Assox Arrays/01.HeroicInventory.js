function solve(arr) {
    let result =[];
    for(let i =0 ; i<arr.length;i++){
        let hero = arr[i].split(' / ').filter(e=>e!='');
        let name = hero[0];
        let level = hero[1];
        let currentHeroItem =[];
        if(hero.length>2) {
            currentHeroItem = hero[2].split(', ');
           var  heroes={name:name,level:Number(level),items:currentHeroItem};
        }
        else{
            var  heroes={name:name,level:Number(level),items:currentHeroItem};
        }

        result.push(heroes);
    }
    console.log(JSON.stringify(result));
}
solve(['Isacc / 25 ',
    'Derek / 12 ',
    'Hes / 1 ']);