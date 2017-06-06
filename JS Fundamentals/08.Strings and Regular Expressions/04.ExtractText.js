function solve(text) {
    let startIndex = text.indexOf('(');

    let result = [];
    while (startIndex>-1){
        let endIndex = text.indexOf(')',startIndex);

        if(endIndex==-1){
            break;
        }

        let sniped= text.substring(startIndex+1,endIndex);

        result.push(sniped);
        startIndex = text.indexOf('(',endIndex);


    }
    console.log(result.join(', '));
}
solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');