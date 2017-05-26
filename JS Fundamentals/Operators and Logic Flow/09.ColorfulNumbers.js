function colorfulNumbers(n) {
    let result = '<ul>\n';
    let color = '';
    for(i=1;i<=n;i++){
       color= i%2==0?'blue':'green';
        result+=`<li><span style='color:${color}'>${i}</span></li>\n`
    }
    result+='</ul>';
    return result;
}
