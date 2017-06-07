function solve(text, word) {
    let counter=0;
    let str = text.toLowerCase();
    let wor=  word.toLowerCase();
    let result = str.split(/\W+/g).filter(a=>a!='');
    for(let e of result){
        if(e==wor){
            counter++;
        }
    }
    console.log(counter);
}
solve('There was one. Therefore I bought it. I wouldn�t buy it otherwise.',
    'there');