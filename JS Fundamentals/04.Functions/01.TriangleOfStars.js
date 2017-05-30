function triangleStars(n) {
    if(n ==1){
        for (let i=1;i<=n;i++){
            console.log("*".repeat(i));
        }
    }
    else{
        for (let i=1;i<=n;i++){
            console.log("*".repeat(i));
        }
        for (i=n-1;i>=1;i--){
            console.log("*".repeat(i));
        }
    }

}
triangleStars(5);