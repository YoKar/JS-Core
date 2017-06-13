function solve(arr) {

    let setArr = new Set();
    for(let e of arr){
        setArr.add(e)
    }


    let result=[];
    for(let ob of setArr){
        result.push(ob)
    }

     result.sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        if(a.length!=b.length) {
            return a.length - b.length;
        }
        else{
           return a>b;
        }
   });


    console.log(result.join('\n'));
}
solve([
    'Denise',
    'Ignatius',
    'Denise',
    'Iris',
    'Isacc',
    'Indie',
    'Denise',
    'Denise',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'

])