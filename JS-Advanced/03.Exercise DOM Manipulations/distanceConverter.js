function attachEventsListeners() {
    let result = {'km' :1000 ,
        'm' :1 ,
        'cm' :0.01,
         'mm': 0.001,
         'mi': 1609.34 ,
         'yrd' : 0.9144 ,
         'ft': 0.3048 ,
         'in':0.0254
    };
document.getElementById('convert').addEventListener('click',converting);
    function converting() {
        let num =document.getElementById('inputDistance');
        Number(num.value);
        let incomeUnit = document.getElementById('inputUnits').value;
        let outcomeUnite = document.getElementById('outputUnits').value;
       let results=(Number(num.value)*(result[incomeUnit]/result[outcomeUnite]));
       
        document.getElementById('outputDistance').value=results;
    }
}

