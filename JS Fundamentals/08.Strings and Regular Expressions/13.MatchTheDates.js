function solve(dates) {

    for(let i=0;i< dates.length;i++){
        let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;

        let date = dates[i].match(pattern);

        if(dates[i].match(pattern)) {
            for (let s of date) {
                let d = s.split('-');

                console.log(`${s} (Day: ${d[0]}, Month: ${d[1]}, Year: ${d[2]})`);
            }
        }
    }

}
solve([`1-Jan-1999 is a valid date.`,
    `So is 01-July-2000.`,
`I am an awful liar, by the way – Ivo, 28-Sep-2016.
`]);