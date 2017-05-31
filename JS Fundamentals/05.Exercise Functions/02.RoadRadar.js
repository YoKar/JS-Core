function roadRadar (arr) {
    let speed = arr[0];
    let area = arr[1];
    switch (area){
        case "city": if(speed>50) {
            if(speed-50 <=20){
                console.log("speeding");
            }
            else if(speed-50 >20&&speed-50<=40){
                console.log("excessive speeding");
            }
            else if(speed-50>40){
                console.log("reckless driving");
            }


        }
            break;
        case "interstate": if(speed>90) {
            if(speed-90 <=20){
                console.log("speeding");
            }
            else if(speed-90 >20&&speed-90<=40){
                console.log("excessive speeding");
            }
            else if(speed-90>40){
                console.log("reckless driving");
            }

        }
            break;
        case "motorway": if(speed>130) {
            if(speed-130 <=20){
                console.log("speeding");
            }
            else if(speed-130 >20&&speed-130<=40){
                console.log("excessive speeding");
            }
            else if(speed-130>40){
                console.log("reckless driving");
            }

        }
            break;
        case "residential": if(speed>20) {
            if(speed-20 <=20){
                console.log("speeding");
            }
            else if(speed-20 >20&&speed-20<=40){
                console.log("excessive speeding");
            }
            else if(speed-20>40){
                console.log("reckless driving");
            }

        }
            break;

    }
}
roadRadar([60, `city`]);