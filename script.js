let arrows = document.querySelectorAll('.clocks-arrow');
const btnStart = document.querySelector('.btn-start');
let mlseconds = document.querySelector('.mlseconds'),
    seconds = document.querySelector('.seconds'),
    minutes = document.querySelector('.minutes'),
    hours = document.querySelector('.hours');
let index = 0;
let id;
let stopArrow;
btnStart.addEventListener('click', function(e){
    e.preventDefault();
    if(this.textContent == 'start'){
        this.textContent = 'stop';
        stopwatch();
    }
    else if(this.textContent == 'stop'){
        this.textContent = 'clear';
        clearTimeout(id);
        clearTimeout(stopArrow);
    }
    else if(this.textContent == 'clear'){
        this.textContent = 'start';
        mlseconds.textContent = 0;
        seconds.textContent = 0;
        minutes.textContent = 0;
        hours.textContent = 0;
        arrowActive();
    }
})

function stopwatch(){
    if(mlseconds.textContent < 10) mlseconds.textContent++;
    if(mlseconds.textContent == 10){
        mlseconds.textContent = 0;
        seconds.textContent++;
    }
    if(seconds.textContent == 60){
        seconds.textContent = 0;
        minutes.textContent++;
    }
    if(minutes.textContent == 60){
        minutes.textContent = 0;
        hours.textContent++;
    }
    stopArrow = setTimeout(arrowActive, 1000, seconds.textContent);
    id = setTimeout(stopwatch, 100); 
}
function arrowActive(index){
    index = index ? index : arrows.length - 1;
    for (let i = 0; i < arrows.length; i++){
        arrows[i].classList.remove('active');
    }
    arrows[index].classList.add('active');
}


