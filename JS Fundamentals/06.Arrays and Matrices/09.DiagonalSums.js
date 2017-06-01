function diagonalSum(matrix) {
    let counter = 0;
    let sum =0;
    let last = 0;
    let lastSum =0;
    matrix.forEach(row =>last= row.length);
   for (let row =0 ; row<matrix.length ;row++){
       sum+=matrix[row][counter];
       counter++;
       lastSum += matrix[row][last-1];
       last--;
   }
    console.log(sum+" "+lastSum);

}
diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);