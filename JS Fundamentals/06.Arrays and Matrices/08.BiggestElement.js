function biggestNum(arr) {
    let biggest = Number.NEGATIVE_INFINITY;
    arr.forEach(row=> row.forEach(e => {
        if (e > biggest) {
            biggest = e;
        }
    }));
    console.log(biggest);
}
biggestNum([[20, 50, 10],
    [8, 33, 145]]
);