function extractText() {
    let result =$('ul#items li').toArray().map(e=>e.textContent).join(', ');
    $('#result').text(result);
}
