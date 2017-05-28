function proparties(arr) {
    let name = arr[0].trim("'");
    let second = arr[1];
    let age = arr[2].trim("'");
    let forth =arr[3];
    let gender = arr[4].trim("'");
    let sixth = arr[5];
    let obj = {};
    obj[name] = second;
    obj[age] = forth;
    obj[gender]=sixth;


    return obj;


}
proparties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);