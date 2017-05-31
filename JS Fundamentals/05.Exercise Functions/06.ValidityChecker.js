function checker(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let x3 = 0;
    let y3 = 0;
    //let area =Math.abs(x1*(y2-y3)+1*(y3-y1)+(-1)*(y1-y2))/2;
    let a = Math.sqrt(Math.pow((x2-(x3)),2)+Math.pow((y2-y3),2));

    let b = Math.sqrt(Math.pow((x3-(x1)),2)+Math.pow((y3-y1),2));

    let c = Math.sqrt(Math.pow((x2-(x1)),2)+Math.pow((y2-y1),2));
    if(a==Math.floor(a)){
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid `);
    }
    if(a!=Math.floor(a)){
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid `);
    }
    if(b==Math.floor(b)){
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid `);
    }
    if(b!=Math.floor(b)){
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid `);
    }
    if(c==Math.floor(c)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid `);
    }
    if(c!=Math.floor(c)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid `);
    }
}
checker([0, 0, 0, 0]);