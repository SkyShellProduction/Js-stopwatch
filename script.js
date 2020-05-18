let arrows = document.querySelectorAll('.clocks-arrow');
const btnStart = document.querySelector('.btn-start');
let seconds = document.querySelector('.seconds'),
        minutes = document.querySelector('.minutes'),
        hours = document.querySelector('.hours');
let i = 0;
btnStart.addEventListener('click', function(e){
    e.preventDefault();
    if(this.innerHTML == 'start'){
        this.innerHTML = 'stop';
        setTimeout(stopwatchActive, 1000, this);
    }
    else if(this.innerHTML == 'stop'){
        this.innerHTML = 'clear';
    }
    else{
        this.innerHTML = 'start';
        seconds.innerHTML = 0;
        minutes.innerHTML = 0;
        hours.innerHTML = 0;
        for( let i of arrows){
            i.classList.remove('active');
            arrows[arrows.length - 1].classList.add('active');
        }
    }
})

function stopwatchActive(btn){
    arrowActive();
    if(btnStart.innerHTML == 'stop'){
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
    
}
function arrowActive(){
    for (let i = 0; i < arrows.length; i++){
        arrows[i].classList.remove('active');
    }
    
    if (i < arrows.length){
        arrows[i].classList.add('active');
        i++;
    }
    else if(i == arrows.length) i = 0;
    if(btnStart.innerHTML == 'clear') i = 0;
}


