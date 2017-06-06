function input(arr) {
    let result= [];
    let sum=0;
    for(let element of arr){
        let townData = element.split('|');

        result.push(townData[1].trim());
        sum+=Number(townData[2].trim());
    }
    console.log(result.join(', '));
    console.log(sum);
}

input(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);