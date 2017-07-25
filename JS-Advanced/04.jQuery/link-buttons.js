function attachEvents() {
    $('.button').click(clicking);
    function clicking() {
        $('a').removeClass('selected');
        $(this).addClass('selected');
    }

}
