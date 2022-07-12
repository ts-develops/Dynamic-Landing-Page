const time = document.getElementById('time'), 
greeting = document.getElementById('greeting'),
name = document.getElementById('name')

// display time
function showTime() {
    let clock = new Date(),
    hour = clock.getHours(),
    min = clock.getMinutes(),
    seconds = clock.getSeconds()
// make it am or pm
    const AmPm = hour >= 12 ? "PM" : "AM"
//having a 12 hour format 
    hour = hour % 12 || 12 

// Adding onto HTML and output time 
    time.innerHTML = `${hour} : ${addZero(min)} : ${addZero(seconds)}`

// set time to display every second (1000ms = 1s)
setTimeout(showTime, 1000)
} 
// display zero when 1 digit 
function addZero(number) {
    return (parseInt(number, 10) < 10 ? '0' : ' ') + number
}

// set background image and styling depending on day
function setBackground(){
    let clock = new Date(), 
    hour = clock.getHours()

    if (hour < 12){
        document.body.style.backgroundImage = "url('img/morning.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Morning'
    }
    else if (hour < 1){
        document.body.style.backgroundImage = "url('img/afternoon.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Afternoon'
    }
    else{
        document.body.style.backgroundImage = "url('img/night.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Evening'
        document.body.style.color = 'white'
    }
}

// run code to display it last
showTime()
setBackground()