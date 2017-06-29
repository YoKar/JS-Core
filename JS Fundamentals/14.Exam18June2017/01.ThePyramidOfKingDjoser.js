function solve(base, increment) {
    let marble= 0;
    let stone = 0;
    let area = base;
    let increase = increment;
    let counter=1;
    let totalStone=0;
    let totalMarble=0;
    let totalLapis=0;
    let temp=0;


    while (true){

        if(area===1||area<1||area===2){
            break;
        }

        if(counter%5===0&&counter>1){
            totalLapis+=summarble(area)*increment;

            temp = summarble(area);
            stone = stones(area, temp);


            totalStone+=(stone*increment);


            area-=2;
            counter++;



        }
        else{

            marble = summarble(area);
            temp=marble;

            totalMarble+=marble*increment;


            stone = stones(area, marble);

            totalStone+=(stone*increment);


            area-=2;

            counter++;
        }


    }


    console.log('Stone required: '+Math.ceil(totalStone));
    console.log('Marble required: '+totalMarble);
    console.log('Lapis Lazuli required: '+totalLapis);
    console.log('Gold required: '+Math.ceil((area*area)*increment));
    console.log('Final pyramid height: '+(Math.floor(counter*increment)));

    function summarble(base) {
        return (base*2)+((base-2)*2);
    }
    function stones(base , matb) {
        return Math.abs((base*base)-matb);
    }

}

solve(23,0.5)