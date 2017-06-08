function solve(arr) {
    let words = arr.join().split(/\W+/g).filter(e=>e!='');
    let obj ={};
    for(let i =0;i<words.length;i++){
        let word = words[i];
        if(!obj.hasOwnProperty(word)){
            obj[word]=0;
        }
        obj[word]+=1;
    }
    console.log(JSON.stringify(obj));
}
solve([`Far too slow, you're far too slow.`]);