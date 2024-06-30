setInterval(() => {
    d = new Date();
    thours = d.getHours();
    tminutes = d.getMinutes();
    tseconds = d.getSeconds();
    hr = 30*thours + tminutes/2;
    mr = 6*tminutes;
    sr = 6*tseconds;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;
    
}, 1000);