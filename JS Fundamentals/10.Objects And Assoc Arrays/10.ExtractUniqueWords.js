function solve(arr) {
    let unique = new Set();
    let words = arr.join()
        .split(/\W+/)
        .filter(e=>e!='')
        .map(e=>e.toLowerCase())
        .forEach(e=>unique.add(e));

    console.log([...unique].join(', '));

}
solve([
   'JS devs use Node.js for server-side JS.',
   'JS devs use JS.',
'-- JS for devs --']);