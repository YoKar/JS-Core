function insideOrOutside(arr) {
    for (let i=0;i<arr.length;i+=3){
        let x = arr[i];
        let y = arr[i+1];
        let z = arr[i+2];

        console.log(inVolume(x, y, z));
    }
    function inVolume(x,y,z) {
        if(x>=0&&x<=50&&y>=0&&y<=80&&z>=0&&z<=50){
            return "inside";
        }
        else{
            return "outside";
        }
    }
}
insideOrOutside([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);