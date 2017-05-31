function input(n) {
    let s= (""+n).split("");
    let sum = 0;
    let num ='';
    for (let i=0;i<s.length;i++){
        sum+=Number(s[i]);
        num+=s[i];
    }


    while (sum/num.length<=5){
        num+="9";
        sum+=9;

   }
    console.log(num);
}
input(5835);