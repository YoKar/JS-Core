function solve(text) {
    let str=text.split(' ');
    let result='';
    for(let e of str){
        result+=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()+' ';
    }
    console.log(result);
}
solve('Was that Easy? tRY thIs onE for SiZe!');