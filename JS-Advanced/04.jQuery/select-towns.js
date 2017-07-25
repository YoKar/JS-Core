function attachEvents() {
    $('ul#items').on('click','li',(selectTown));
    let towns =[];
    function selectTown() {
        let li = $(this);
        if(li.attr('data-selected')){
            li.removeAttr('data-selected');
            li.css('background','');
            let index =towns.indexOf(li.text());
            towns.splice(index,1)
        }
        else{
            li.attr('data-selected','true');
            li.css('background','#DDD');
            towns.push(li.text());
        }


    }
    $('#showTownsButton').click(showTowns);
    function showTowns() {
        $('#selectedTowns').text("Selected towns: "+towns.join(', '));
    }
}

