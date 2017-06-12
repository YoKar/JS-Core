function locator(arr) {

    for(let i=0;i<arr.length;i+=2){
        console.log(treasure(arr[i], arr[i + 1]));

    }
    function treasure(a, b) {
        if(a>=8&&a<=9&&b>=0&&b<=1){
            return "Tokelau";
        }
        else if(a>=1&&a<=3&&b>=1&&b<=3){
            return "Tuvalu";
        }
        else if(a>=5&&a<=7&&b>=3&&b<=6){
            return "Samoa";
        }
        else if(a>=0&&a<=2&&b>=6&&b<=8){
            return "Tonga"
        }
        else if(a>=4&&a<=9&&b>=7&&b<=8){
            return "Cook";
        }
        else {
            return "On the bottom of the ocean";
        }
    }
}
locator([6,4]);