function input(arr) {
    let result=[];

    for(let i =0 ; i<arr.length;i++){
        let usernameData = arr[i].split('@');
        let lastExt = usernameData[1].split('.');
        let username = "";
        username+=usernameData[0];
        username+=".";
        for(let e of lastExt){
            username+=e[0];
        }
        result.push(username);

    }
    console.log(result.join(', '));
}
input(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
