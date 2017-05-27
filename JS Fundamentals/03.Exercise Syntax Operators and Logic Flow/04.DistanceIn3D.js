function threeSides(arr) {
    let x1 = Number(arr[0]);
    let y1 =Number(arr[1]) ;
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
    let x3 = Number(arr[4]);
    let y3 = Number(arr[5]);
    console.log(x1,y1,x2,y2,x3,y3);
    let a = Math.sqrt((x1-x2)*(x1+x2)+(y1+y2)*(y1+y2));
    console.log(a);
    let b = Math.sqrt(Math.abs((x1-x3)*(x1+x3)+(y1+y3)*(y1+y3)));
    console.log(b);
    let c = Math.sqrt((x2-x3)*(x2-x3)+(y2+y3)*(y2+y3));
    console.log(c.toFixed(1));
}
threeSides([1, 1, 0, 5, 4, 0]);