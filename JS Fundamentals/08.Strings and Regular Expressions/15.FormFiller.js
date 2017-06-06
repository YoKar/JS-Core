function solve(nam,em,ph, arr) {
    let name = nam;
    let email = em;
    let phone = ph;

    let userStart = '<!';
    let userEnd = '!>';
    let meilStart ='<@';
    let meilEnd = '@>';
    let phoneStart = '<+';
    let phoneEnd = '+>';
    for(let i=0;i<arr.length;i++){
        if(arr[i].indexOf(userStart)>-1){
            let startIndex = arr[i].indexOf(userStart);
            let endIndex=arr[i].indexOf(userEnd);
            let word = arr[i].substring(startIndex,endIndex+2);
            arr[i]= arr[i].replace(word,name);

        }
        if(arr[i].indexOf(meilStart)>-1){
            let startIndex = arr[i].indexOf(meilStart);
            let endIndex=arr[i].indexOf(meilEnd);
            let word = arr[i].substring(startIndex,endIndex+2);
            arr[i]= arr[i].replace(word,email);

        }
         if(arr[i].indexOf(phoneStart)>-1){
            let startIndex = arr[i].indexOf(phoneStart);
            let endIndex=arr[i].indexOf(phoneEnd);
            let word = arr[i].substring(startIndex,endIndex+2);
            arr[i]= arr[i].replace(word,phone);

         }
    }
    console.log(arr.join('\n'));
}
solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);