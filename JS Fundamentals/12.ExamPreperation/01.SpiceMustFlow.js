function solve(arr) {
    let spice = Number(arr[0]);
    let days = 0;
    let minedSpice =0;
    while (spice>=100){
       minedSpice+=spice-26;


        spice-=10;
       days++;
       if(spice<100){
           break;
       }
    }
    console.log(days);
    if(minedSpice>=26){
        minedSpice -= 26;

    }

        console.log(minedSpice);


}
solve(['100']);
