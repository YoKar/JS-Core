function solve(text) {

   let split= text.match(/\b_[a-zA-Z0-9]+\b/g);
   let result= [];
    for(let e of split){
        result.push(e.substring(1));
    }
    console.log(result.join(","));
}
solve('The _id and _age variables are both integers.');