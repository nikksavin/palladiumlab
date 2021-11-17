function progress() {
    let elem = document.getElementById('progressbar__line');
    let label = document.getElementById('progressbar__label');
    let startWidth = 0;
    let id = setInterval(progressStatus, 100);

    function progressStatus() {
        if (startWidth >= 100) {
            clearInterval(id);
        } else {
            startWidth++;
            elem.style.width = startWidth + '%';
            label.innerHTML = startWidth * 1 + '%';
        }
    }

}

progress();