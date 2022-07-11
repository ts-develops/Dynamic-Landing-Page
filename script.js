const time = document.getElementById('#time'), 
greeting = document.getElementById('#greeting'),
name = document.getElementById('#name')

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
    time.innerHTML = `${hour} : ${min} : ${seconds}`

// set time to display every second 
setTimeout(showTime, 1000) 
}

showTime()