function input(n) {
    let matrix = [];
    let counter = 1;
    let string = "";
    for (let row = 0; row < n; row++) {
        string+="[";
        for (let col = 0; col < n; col++) {
            string+=counter+',';
            counter++;

        }
        string+=']'+'\n';
    }
    
    console.log(string);
}
input(5);