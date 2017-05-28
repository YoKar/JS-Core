function PointInRect(arr) {
    let [x,y,x1,x2,y1,y2]=arr;
    if (x>=x1&&x<=x2&&y>=y1&&y<=y2){
        console.log("inside");
    }
    else{
        console.log("outside");
    }
}
//PointInRect([8 ,-1,2,12 ,-3,3]);
PointInRect([12.5 ,-1,2,12 ,-3,3]);