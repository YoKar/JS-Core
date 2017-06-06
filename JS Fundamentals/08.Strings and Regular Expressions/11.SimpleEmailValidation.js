function input(email) {
    let pattern = /^[a-zA-Z0-9]+@[a-z ]+\.[a-z]+$/g
    return email.match(pattern)?'Valid':'Invalid';
}
console.log(input('invalid@emai1.bg'));