function multiplicationTable(n) {
    let text = `<table border='1'>`+"\n";
    var x = "x";
    for (let i=0;i<=n;i++){
        text+=  `<tr><th>${x}</th>`;
        for (let k=0;k<=n;k++){
            text+=`<th>$</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n`
        }
    }
}
