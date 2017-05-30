function quadraticEquation(num1 , num2, num3) {
    let a =num1;
    let b = num2;
    let c = num3;

    let d = Math.pow(b,2)-(4*a*c);
    if (d>0){
        let x1 = (-b+Math.sqrt(d))/(2*a);
        let x2 = (-b-Math.sqrt(d))/(2*a);
        if(x1<x2){
            console.log(x1.toFixed(5));
            console.log(+x2.toFixed(5));
        }
        else{
            console.log(+x2.toFixed(5));
            console.log(x1.toFixed(5));
        }

    }
   else if (d==0){
        let x = -b/(2*a);
        console.log(x);
    }
    else{
        console.log("No");
    }
}
quadraticEquation(1,-12,36);