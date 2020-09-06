let countDate = new Date('Jan 1, 2021, 00:00')
//let countDate = new Date('Sep 6, 2020, 14:15:30')

let t = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + ' <br/> <span>days</span>'
    document.getElementById('hours').innerHTML = hours + ' <br/> <span>hours</span>'
    document.getElementById('mins').innerHTML = minutes + ' <br/> <span>minutes</span>'
    document.getElementById('sec').innerHTML = seconds + ' <br/> <span>seconds</span>'
    // If the count down is finished, write some tett
    if (distance < 0) {
        clearInterval(t)
        document.getElementById("h1").innerHTML = "Happy New Year!";
        document.getElementById('time').style.display = 'none'
        document.getElementById('h2').style.display = 'none'
        document.getElementById('abba').style.display = 'block'
        let vid = document.getElementById('myvid')
        vid.style.display = 'block'
        vid.autoplay = true;
        vid.load();


    }
}, 1000);