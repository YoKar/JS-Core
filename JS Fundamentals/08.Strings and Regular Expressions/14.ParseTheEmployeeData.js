function solve(arr) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/g
    for(let i =0;i<arr.length;i++){
        if(arr[i].match(pattern)){
            let result = arr[i].match(pattern);
            for(let s of result) {
                let spliter = s.split('-');

                console.log(`Name: ${spliter[0].trim()}\nPosition: ${spliter[2].trim()}\nSalary: ${spliter[1].trim()}`);
            }
        }

    }
}
solve([`Isacc - 1000 - CEO`,
`Ivan - 500 - Employee`,
`Peter - 500 - Employee`,]);