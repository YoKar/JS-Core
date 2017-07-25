function increment(wrapper) {
    let counter= 0;
    ($('<textarea class="counter">').val('0').prop('disabled',true)).appendTo(wrapper);
    ($('<button class="btn" id="incrementBtn">Increment</button>')).appendTo(wrapper);
    ($('<button class="btn" id="addBtn">Add</button>')).appendTo(wrapper);
    ($('<ul class="result">')).appendTo(wrapper);
    $('#incrementBtn').click(increase);
    function increase() {
       counter++;
        $('.counter').val(counter);


    }
    $('#addBtn').click(addDigit);
    function addDigit() {
        let result = $('.counter').val();
        ($('<li>').append(result)).appendTo($('.result'))


    }



}
