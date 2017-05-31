function cookingByNumbers(arr) {
    let n = arr[0];
    for (let i=1;i<arr.length;i++){
        switch (arr[i]){
            case "chop":n/=2;
                console.log(n);
                break;
            case "dice":n=Math.sqrt(n);
                console.log(n);
                break;
            case "spice":n++;
                console.log(n);
                break;
            case "bake":n*=3;
                console.log(n);
                break;
            case "fillet":n -=n*0.2;
                console.log(n);
                break;
        }
    }
}
cookingByNumbers([9, `dice`, `spice`, `chop`, `bake`, `fillet`]);