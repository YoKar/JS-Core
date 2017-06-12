function solve(jsonToHTML) {
    let obj = JSON.parse(jsonToHTML);
    let result = '<table>\n';
    let counter =0
    for(let e of obj){

      let prop=(Object.keys(e));
      let values = Object.values(e);
      if(counter<1) {
          result+='   <tr>';
          for (let i = 0; i < prop.length; i++) {
              result += `<th>${prop[i]}</th>`
          }
          result+='</tr>\n';
      }

        result+='   <tr>';
        for(let j =0;j<values.length;j++){
            result+=`<td>${input(values[j])}</td>`

        }
        result+='</tr>\n';
        counter++;
    }
    result+='</table>';
    console.log(result);
    function input(ins) {
        ins=ins.toString();
        let symbols = ['&', '<', '>', '"',"'"];
        let result;


        result = ins.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g,'&#39;');



        return result;
    }
}
solve(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`
);