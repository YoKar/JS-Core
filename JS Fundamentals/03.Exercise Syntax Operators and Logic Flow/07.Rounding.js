function roundNumber(arr) {
    let number= arr[0];
    let rounder = arr[1];
    if(rounder>15){
        rounder=15;
    }
    console.log(+number.toFixed(rounder));
}
roundNumber([3.1415926535897932384626433832795, 2]);