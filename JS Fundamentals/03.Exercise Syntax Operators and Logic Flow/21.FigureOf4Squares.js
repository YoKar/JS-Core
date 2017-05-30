function figureOfSquares(n) {
    let rows = 0;
    if(n==1){
        console.log("+");
        console.log("+");
    }
    else{
        if (n%2==0){
            rows = n-1;
        }
        else{
            rows = n;
        }

        console.log("+"+("-").repeat(((n*2)-4)/2)+"+"+("-").repeat(((n*2)-4)/2)+"+");
        for (let i=0;i<(rows-3)/2;i++){
            console.log("|"+(" ").repeat(((n*2)-4)/2)+"|"+(" ").repeat(((n*2)-4)/2)+"|");
        }
        console.log("+"+("-").repeat(((n*2)-4)/2)+"+"+("-").repeat(((n*2)-4)/2)+"+");
        for (let i=0;i<(rows-3)/2;i++){
            console.log("|"+(" ").repeat(((n*2)-4)/2)+"|"+(" ").repeat(((n*2)-4)/2)+"|");
        }
        console.log("+"+("-").repeat(((n*2)-4)/2)+"+"+("-").repeat(((n*2)-4)/2)+"+");
    }

}
figureOfSquares(1);