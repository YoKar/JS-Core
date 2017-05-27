function distance(arr) {
    let objOne = arr[0];
    let objTwo = arr[1];
    let time = arr[2];
    let distance = Math.abs((time/3600*objOne)-(time/3600*objTwo));
    console.log(distance*1000);
}
distance([5, -5, 40]);