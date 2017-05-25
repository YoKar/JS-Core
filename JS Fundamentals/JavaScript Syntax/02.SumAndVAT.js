function digits(arr) {
    let sum =0;
    let VAT = 0;

     for(i=0;i<arr.length;i++){
         sum+=arr[i];
     }
     VAT = sum*0.2;
    let totalSum  =VAT+sum;
        console.log(`sum = ${sum}`);
     console.log(`VAT = ${VAT}`);
     console.log(`total = ${totalSum}`)

}
