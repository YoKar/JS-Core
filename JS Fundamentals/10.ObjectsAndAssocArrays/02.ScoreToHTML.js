function solve(json) {
    let text = JSON.parse(json);
    let result = '<table>\n'+'   <tr><th>name</th><th>score</th></tr>\n';
    for(let k = 0 ; k<text.length;k++) {


            result += `   <tr><td>${input(text[k].name)}</td><td>${text[k].score}</td></tr>\n`;

    }
    result+='</table>';
    console.log(result);
    function input(ins) {

        let symbols = ['&', '<', '>', '"',"'"];
        let result;


            ins = ins.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g,'&#39;');



        return ins;
    }

}
solve(`[{"name":"<div>a && 'b'</div>","score":111},{"name":"Jichka Jochkova","score":-50}]`);