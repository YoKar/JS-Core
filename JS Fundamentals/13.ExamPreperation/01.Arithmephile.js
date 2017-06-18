function solve(arr) {
    let num = Number.MIN_SAFE_INTEGER;
    arr=arr.map(Number);
    let counter = 0;
    for(let i = 0;i<arr.length;i++){
        counter=0;
        if(arr[i]>=0&&arr[i]<10){

            let currentNum = 1;
            counter = arr[i];
            let dig =1;
            for(let k=0;k<counter;k++){

                currentNum*=arr[i+dig];
                dig++;

            }
            if(num<currentNum){
                num=currentNum;
            }
        }


    }
    console.log(num);
}
solve([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'



]);