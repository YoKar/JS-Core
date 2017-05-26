function oddOrEven(n) {
    if(n%2==0){
        console.log('even')
    }
    else if(n!=Math.round(n)){
        console.log('invalid');
    }
    else{
        console.log('odd');
    }
}
oddOrEven(2.2)

