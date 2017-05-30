function ticketPrices(arr) {
    let movieTitle = arr[0].toLowerCase();
    let dayOfWeek = arr[1].toLowerCase();

    let ticketPrice = '';
    if (dayOfWeek =="monday"){
        switch (movieTitle){
            case "the godfather": ticketPrice=12;
                 break;
            case "schindler's list": ticketPrice=8.50;
                 break;
            case "casablanca": ticketPrice = 8;
                 break;
            case "the wizard of oz": ticketPrice= 10;
                break;
            default:
                ticketPrice="error";
        }
    }
    else if(dayOfWeek =="tuesday"){
        switch (movieTitle){
            case "the godfather": ticketPrice=10;
                break;
            case "schindler's list": ticketPrice=8.50;
                break;
            case "casablanca": ticketPrice = 8;
                break;
            case "the wizard of oz": ticketPrice= 10;
                break;
            default:
                ticketPrice="error";
        }
    }
    else if(dayOfWeek=="wednesday"){
        switch (movieTitle){
            case "the godfather": ticketPrice=15;
                break;
            case "schindler's list": ticketPrice=8.50;
                break;
            case "casablanca": ticketPrice = 8;
                break;
            case "the wizard of oz": ticketPrice= 10;
             break;
            default:
                ticketPrice="error";
        }
    }
    else if(dayOfWeek=="thursday"){
        switch (movieTitle){
            case "the godfather": ticketPrice=12.50;
                break;
            case "schindler's list": ticketPrice=8.50;
                break;
            case "casablanca": ticketPrice = 8;
                break;
            case "the wizard of oz": ticketPrice= 10;
                break;
            default:
                ticketPrice="error";
        }
    }
    else if(dayOfWeek=="friday"){
        switch (movieTitle){
            case "the godfather": ticketPrice=15;
                break;
            case "schindler's list": ticketPrice=8.50;
                break;
            case "casablanca": ticketPrice = 8;
                break;
            case "the wizard of oz": ticketPrice= 10;
                break;
            default:
                ticketPrice="error";
        }
    }
    else if(dayOfWeek=="saturday"){
        switch (movieTitle){
            case "the godfather": ticketPrice=25;
                break;
            case "schindler's list": ticketPrice=15;
                break;
            case "casablanca": ticketPrice = 10;
                break;
            case "the wizard of oz": ticketPrice= 15;
                break;
            default:
                ticketPrice="error";
        }
    }
    else if (dayOfWeek=="sunday") {
        switch (movieTitle){
            case "the godfather": ticketPrice=30;
                break;
            case "schindler's list": ticketPrice=15;
                break;
            case "casablanca": ticketPrice = 10;
                break;
            case "the wizard of oz": ticketPrice= 15;
                break;
            default:
                ticketPrice="error";
        }
    }
    else{
        ticketPrice="error";
    }

        console.log(ticketPrice);



}
ticketPrices(['Schindler\'s LIST','nineDay']);