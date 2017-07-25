function attachEventsListeners() {
    let day = document.getElementById('days');
    let hour = document.getElementById('hours');
    let minute = document.getElementById('minutes');
    let second = document.getElementById('seconds');
let days =document.getElementById('daysBtn').addEventListener('click',daysConvert);
let hours = document.getElementById('hoursBtn').addEventListener('click',hoursConverter);
let minutes = document.getElementById('minutesBtn').addEventListener('click',minutesConverter);
let seconds = document.getElementById('secondsBtn').addEventListener('click',secondsConverter);
function daysConvert() {
   hour.value=Number(day.value)*24;
    minute.value=Number(day.value)*24*60;
    second.value=Number(day.value)*24*60*60;

}
function hoursConverter() {
    day.value=Number(hour.value)/24;
    minute.value=Number(hour.value)*60;
    second.value=Number(hour.value)*60*60;
}
function minutesConverter() {
    day.value=Number(minute.value)/60/24;
    hour.value=Number(minute.value)/60;
    second.value=Number(minute.value)*60;
}
function secondsConverter() {
    day.value=Number(second.value)/60/60/24;
    hour.value=Number(second.value)/60/60;
    minute.value=Number(second.value)/60;
}
}

