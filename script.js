let digitalWatch = document.querySelector('.digital');
let secondPointer = document.querySelector('.p_s');
let minuterPointer = document.querySelector('.p_m');
let hourPointer = document.querySelector('.p_h');
let calendar = document.querySelector('.data');


function updateDigitalClock(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dataComplete = `${fixedZ(day)}/${fixedZ(month)}/${year}`;
    calendar.innerHTML = dataComplete
}

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
        
    digitalWatch.innerHTML = `${fixedZ(hour)}:${fixedZ(minute)}:${fixedZ(seconds)}`;

    //calculo de rotação dos ponteiros
    let sDeg = ((360 / 60) * seconds) - 90;
    let mDeg = ((360 / 60) * minute) -90;
    let hDeg = ((360 / 12) * hour) -90 ;

    secondPointer.style.transform = `rotate(${sDeg}deg)`;
    minuterPointer.style.transform = `rotate(${mDeg}deg)`;
    hourPointer.style.transform = `rotate(${hDeg}deg)`;
    setInterval(updateClock, 1000);
    
}
function fixedZ(time){
    return time <= 9 ? `0${time}` : time;
}


updateClock(); // Atualização de 1 em 1s
updateDigitalClock();