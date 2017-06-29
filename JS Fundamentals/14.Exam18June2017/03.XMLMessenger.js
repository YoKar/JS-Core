function solve(HTML) {
   let pattern =/^<message .+?>(.+?)<\/message>$/g;
   let str = HTML.match(pattern);
   let result ="";


    if(HTML.match(pattern)){
        let stext = HTML.match(/>.+</);



        console.log(stext);
        let prts = /[a-z]{1,}\=\"[a-zA-Z0-9+\s*\.*]+\"/g;
       let valideAtributes = HTML.match(prts);
        let toPart = HTML.match(/to\=\"[a-zA-Z0-9+\s*\.*]+\"/g);
        let from = HTML.match(/from\=\"[a-zA-Z0-9+\s*\.*]+\"/g);


        let lastElement=valideAtributes.pop();

        if(from==null||toPart==null){
            console.log(`Missing attributes`);
        }
        else {
           // result+=
        }
    }
    else{
        console.log(`Invalid message format`);
    }
}
solve(`<message to="Bob" from="Charlie" timestamp="1497254114">Same old, same old Let's go out for a beer</message>`);