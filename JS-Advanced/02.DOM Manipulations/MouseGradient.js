function attachGradientEvents() {
    let div = document.getElementById('gradient');
    let result = document.getElementById('result');
    div.onmousemove=function (event) {
        let mousePosition = event.offsetX;
        let percent = (mousePosition/(div.clientWidth-1))*100;
        result.textContent=Math.floor(percent)+'%';

    };
    div.onmouseout=function () {
        result.textContent="";

    }
}
