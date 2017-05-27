function tagHTML(arr) {
    let location = arr[0].trim("'");
    let text = arr[1].trim("'");
    let emptyText ="";

    console.log((`<img src="${location}" alt="${text}">`))
}
tagHTML(['smiley.gif', 'Smiley Face']);