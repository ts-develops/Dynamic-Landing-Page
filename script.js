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

// run code to display it last
showTime() 