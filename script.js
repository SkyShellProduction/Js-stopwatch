let arrows = document.querySelectorAll('.clocks-arrow');
let btnStart = document.querySelector('.btn-start');
btnStart.addEventListener('click', function(e){
    e.preventDefault();
    stopwatchActive(this);
})
let i = 0;
function stopwatchActive(){
    for (let i = 0; i < arrows.length; i++){
        arrows[i].classList.remove('active');
    }
    
    if (i < arrows.length){
        arrows[i].classList.add('active');
        i++;
    }
    if(i == arrows.length) i = 0;

    let seconds = document.querySelector('.seconds'),
    minutes = document.querySelector('.minutes'),
    hours = document.querySelector('.hours');

    if(seconds.innerHTML < 59){
        seconds.innerHTML++;
    }
    else if(seconds.innerHTML == 59){
        seconds.innerHTML = 0;
        minutes.innerHTML++;
    }
    if(seconds.innerHTML == 59 && minutes.innerHTML == 59){
        seconds.innerHTML = 0;
        minutes.innerHTML = 0;
        hours.innerHTML++;
    }
    setTimeout(stopwatchActive, 1000);
}