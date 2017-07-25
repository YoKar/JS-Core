function timer() {
    let seconds = 1;
    let minutes = 0;
    let hours = 0;
    let timer=null;

    $('#start-timer').click(startCount);

   $('#stop-timer').click(stopInterval);
    function startCount() {
        $('#start-timer').prop('disabled',true);
        $('#stop-timer').prop('disabled',false);
       timer= setInterval(function () {

            $('#seconds').text(('0'+seconds).slice(-2));
           $('#minutes').text(('0'+minutes).slice(-2));
           $('#hours').text(('0'+hours).slice(-2));
           seconds++;

            if(seconds===60){
                seconds=0;
                minutes++;


            }
            if(minutes===60){
                minutes=0;
                hours++;


            }

        },1000)

    }

    function stopInterval() {
        $('#start-timer').prop('disabled',false);
        $('#stop-timer').prop('disabled',true);
        clearInterval(timer)
    }

}

