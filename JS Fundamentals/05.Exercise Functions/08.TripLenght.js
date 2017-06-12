function tripLength(arr) {
     let x1=arr[0];
     let y1 = arr[1];
     let x2 = arr[2];
     let y2 = arr[3];
     let x3 =arr[4];
     let y3 = arr[5];
    console.log(findLength(x1, y1, x2, y2, x3, y3));
    function findLength(x1, y1, x2, y2, x3, y3) {
        let a = Math.sqrt(Math.pow((x2-(x3)),2)+Math.pow((y2-y3),2));

        let b = Math.sqrt(Math.pow((x3-(x1)),2)+Math.pow((y3-y1),2));

        let c = Math.sqrt(Math.pow((x2-(x1)),2)+Math.pow((y2-y1),2));

        let str = "";
        if(a<=b&&a<=c){
            if(b<=c){
                str+="1->3->2";
                return str+`: ${a+b}` ;
            }
            else{
                str+="1->2->3";
                return str+`: ${a+c}` ;
            }
        }

        if(b<=c&&b<=a){
            if(c<=a){
                if(c==a){
                    str+="2->3->1";

                    return str+`: ${a+b}`;
                }
                else{
                    str+="2->1->3";
                    return str+`: ${b+c}` ;
                }

            }
            else{
                str+="2->1->3";
                return str+`: ${b+c}` ;
            }

        }
        if(c<=a&&c<=b){
            if(a<=b){
                str+="3->2->1";
                return str+`: ${c+b}`
            }
            else{
                str+="3->1->2";
                return str+`: ${c+a}`;
            }

        }

    }

}
tripLength([-1, -2, 3.5, 0, 0, 2])