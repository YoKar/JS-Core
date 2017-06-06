function input(arr) {
    let result=[];
    let sum=0;
    for(let i =0;i<arr.length;i+=2){
        result.push(arr[i]);

            sum+=Number(arr[i+1])




    }
    console.log(`You purchased ${result.join(', ')} for a total sum of ${+sum.toFixed(2)}`);
}
input(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);