function solve(arr) {
    let numbers = [];
    let aritmetics=[];
    let SUM=0;
    let sum=[];
    let bool=0;
   for (let e of arr){
       if(e%1===0||e%2===0){
           numbers.push(e)
       }
       else {
           aritmetics.push(e);
       }
   }
   if(numbers.length-aritmetics.length>1){
       console.log(`Error: too many operands!`);
       bool=1;

   }
   else if(aritmetics.length>=numbers.length){
       console.log(`Error: not enough operands!`);
       bool=1;

   }

   else {

       for (let i = 0;i<arr.length;i++){

           if(arr[i]=='+'||arr[i]=='-'||arr[i]=='*'||arr[i]=='/'){

               if(arr[i]=='+') {

                   SUM = sum[sum.length - 2] + sum[sum.length - 1];
                   sum.splice(sum.length - 2, 2);
                   sum.push(SUM);



               }
               else if(arr[i]=='*') {
                   SUM=sum[sum.length-2]*sum[sum.length-1];
                   sum.splice(sum.length-2,2);
                   sum.push(SUM);


               }
                    else if(arr[i]=='-') {
                   SUM = sum[sum.length - 2] - sum[sum.length - 1];
                   sum.splice(sum.length - 2, 2);
                   sum.push(SUM);

               }

                  else if(arr[i]=='/') {

                   SUM = sum[sum.length - 2] / sum[sum.length - 1];
                   sum.splice(sum.length - 2, 2);
                   sum.push(SUM);

               }

           }

           else {
               sum.push(arr[i]);


           }


       }

   }
   if(bool==0){
       console.log(SUM);
   }

}
solve([3,
    4,
    '+']







);