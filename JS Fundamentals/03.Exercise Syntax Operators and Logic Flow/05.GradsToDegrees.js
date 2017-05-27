function gradsToDagrees(grads) {
    grads%=400;
    grads=grads<0?400+grads:grads;
    grads*=360/400;
    console.log(grads);
}
gradsToDagrees(-50);