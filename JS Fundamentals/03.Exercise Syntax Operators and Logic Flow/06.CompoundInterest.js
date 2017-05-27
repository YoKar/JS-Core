function Interest(arr) {

   let K = arr[0];
   let fin = arr[1];
   fin=fin.toFixed(1);
   let period = 12/arr[2];
    let years = arr[3];
    for (i=0;i<years;i++){
        for (k=0;k<period;k++){
            let litleF = (K*(fin/100))/period;
            K+=litleF;

        }
    }
    console.log(K.toFixed(2));

}
Interest([100000, 5, 12, 25]);