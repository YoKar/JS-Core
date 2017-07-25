function addItem() {
let optionElement = document.createElement('option');
 let firstText = document.getElementById('newItemText');
 let secondText = document.getElementById('newItemValue');
 optionElement.textContent=firstText.value+' '+secondText.value;
 document.getElementById('menu').appendChild(optionElement);
 firstText.value='';
 secondText.value='';
}
