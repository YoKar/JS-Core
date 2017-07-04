function attachEvents() {
    $('#items ').on('click','li',clicked);
    function clicked() {
        let li = $(this);
        if(li.attr('data-selector')){
            li.removeAttr('data-selector');
            li.css('background','');
        }
        else{
            li.attr('data-selector','true');
            li.css('background','#DDD');
        }
        $('#showTownsButton').on('click',showTowns);
        function showTowns() {
            let selLi = $('#items li[data-selector=true]');
            let towns = selLi.toArray().map(li=>li.textContent).join(', ');
            $('#selectedTowns').text('Selected towns: '+towns);
        }
    }
}
