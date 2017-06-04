function solve(string) {
    for(let leter in string){
        console.log(`str[${leter}] -> ${string[leter]}`);
    }
}
solve('Hello, World!');