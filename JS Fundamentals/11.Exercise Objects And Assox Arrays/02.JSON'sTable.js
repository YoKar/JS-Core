function solve(arr) {
    let obj={};
    let HTML = '<table>\n'
    for(let i =0;i<arr.length;i++){
        HTML+='   <tr>\n';
        obj=JSON.parse(arr[i])
        HTML+=`      <td>${obj.name}</td>\n      <td>${obj.position}</td>\n      <td>${obj.salary}</td>\n`;
        HTML+='   <tr>\n';
    }
    HTML+='</table>';
    console.log(HTML);
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
    ]);