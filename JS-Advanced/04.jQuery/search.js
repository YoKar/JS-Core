function search() {

    let input = $('#searchText').val();

   let Li =$(`ul#towns li:contains(${input})`);
    Li.css('font-weight','bold');
    $(`ul#towns li:not(:contains(${input}))`).css('font-weight','');
     $('#result').text(Li.length+' matches found');
    $('#searchText').val('')

}