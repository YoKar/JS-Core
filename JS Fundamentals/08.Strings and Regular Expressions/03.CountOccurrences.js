function solve(word,string) {
    let count = 0;
    let index = string.indexOf(word);
    while (index>-1){

        count++;
        index = string.indexOf(word,index+1);
    }
    console.log(count);
}
solve('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');