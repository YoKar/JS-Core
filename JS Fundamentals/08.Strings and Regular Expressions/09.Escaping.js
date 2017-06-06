function input(arr) {
    let symbols =['&','<','>','"'];

    for(let i =0 ; i<arr.length;i++){


               arr[i]= arr[i].replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')


    }
    let text = '<ul>'+'\n';
    for(let e of arr){
        text+='<li>'+e+'</li>'+'\n'
    }
    text+='</ul>';
    console.log(text);

}
input(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);