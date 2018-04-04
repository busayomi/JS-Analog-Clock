function setTime(){
    now = new Date();

    sec = now.getSeconds();
    mins = now.getMinutes();
    hours = now.getHours();
    console.log(hours);
    console.log(mins);
    console.log(sec);
    
    secDegrees = ((sec / 60) * 360) + 90 ;
    minsDegrees = ((mins / 60) * 360) + 90 ;
    hoursDegrees = ((hours / 12) * 360) + 90 ;
    
    secHand = document.querySelector('.sec');
    secHand.style.transform = `rotate(${secDegrees}deg)`;
    
    minsHand = document.querySelector('.mins');
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; 

    hoursHand = document.querySelector('.hours');
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`; 

    secHand = document.querySelector('.digital');
    secHand.innerHTML = hours + ":" + mins + ":" + sec;
}

setInterval(setTime, 1000);

setTime();
