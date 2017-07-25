function initializeTable() {
    createCountry('Bulgaria','Sofia');
    createCountry('Germany','Berlin');
    createCountry('Russia','Moscow');
    FixLinks();
    $("#createLink").click(addCountry);
    function addCountry() {
        let name = $("#newCountryText").val();
        let capital = $("#newCapitalText").val();
        if(name.match(/[a-zA-Z]/)&&capital.match(/[a-zA-Z]/)){
            createCountry(name,capital);
        }


        FixLinks();
        $("#newCountryText").val('');
        $("#newCapitalText").val('');
    }
    function FixLinks() {
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide();
        $('tr:eq(2) a:contains(Up)').hide();
    }
    function createCountry(name,capital) {
        let tr = $("<tr>");
        tr.append($("<td>").text(name));
        tr.append($("<td>").text(capital));
        tr.append($("<td>").append($("<a href='#'>[Up]</a>").click(moveUp))
            .append($("<a href='#'>[Down]</a>").click(moveDown))
            .append($("<a href='#'>[Delete]</a>").click(Delete)));
        tr.css('display','none');
        tr.fadeIn();
        $("#countriesTable").append(tr);

        FixLinks();
    }
    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(function () {
            currentRow.insertBefore(currentRow.prev());
            currentRow.fadeIn();
            FixLinks();
        });


    }
    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(function () {
            currentRow.insertAfter(currentRow.next());
            currentRow.fadeIn();
            FixLinks();
        })


    }
    function Delete() {
        let row =  $(this).parent().parent();
        row.fadeOut(()=>row.remove());

        FixLinks();
    }
}