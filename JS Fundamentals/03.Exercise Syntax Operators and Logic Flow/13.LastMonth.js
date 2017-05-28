function lastMonth(arr) {
    let day = 0;
    let month = arr[1];
    let year = arr[2];

    let d = new Date(year,month-1,day);


    console.log(d.getDate());

}
lastMonth([1, 3, 2002]);