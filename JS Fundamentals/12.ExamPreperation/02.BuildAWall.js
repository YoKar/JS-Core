function solve(arr) {
    arr=arr.map(Number);
    let allCubic=0;
    let boolean = true;
    let cubics =[];
    while (boolean) {
        let cubic = 0;
        boolean=false;
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] < 30) {
                cubic +=195;
                arr[i]+=1;
                boolean=true;
            }
        }
        if(cubic!==0) {
            cubics.push(cubic);
        }
    }
    console.log(cubics.join(', '));

    console.log(cubics.reduce(sum,0)*1900+' pesos');
    function sum(a, b) {
    return a+b;
}
}
solve(['17', '22', '17', '19', '17']);