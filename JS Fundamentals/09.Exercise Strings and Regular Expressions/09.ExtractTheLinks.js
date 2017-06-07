function solve(arr) {
    let pattern = /www.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
    let text ="";
    for(let e of arr){
        if(e.match(pattern)) {
            text += e.match(pattern) + '\n';
        }
    }

    console.log(text);

}
solve(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    `Here are some reviews in some blogs:
"London Hotels are awesome!" - www.indigo.bloggers.com`,
'"I am very satisfied with their services" - ww.ivan.bg',
'"Best Hotel Services!" - www.rebel21.sedecrem.moc']);