const time = document.getElementById('time'), 
greeting = document.getElementById('greeting'),
task = document.getElementById('task'),
maintxt = document.getElementById('maintxt')

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
    time.innerHTML = `${hour} : ${addZero(min)} : ${addZero(seconds)} ${AmPm}`

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
    else if (hour < 18){
        document.body.style.backgroundImage = "url('img/afternoon.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Afternoon'
    }
    else if (hour < 20){
        document.body.style.backgroundImage = "url('img/evening.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Evening'
    }

    else{
        document.body.style.backgroundImage = "url('img/night.jpg')"
        document.body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Night'
        document.body.style.color = 'white'
    }
}

// getname
function getName(){
    if (localStorage.getItem('maintxt') === null){
        maintxt.textContent = '[Enter Name Here]'
    }
    else {
        maintxt.textContent = localStorage.getItem('maintxt')
    }
}

// setname
function setName(event){
    if (event.type === 'keypress'){
        //lets me know that enter(13th key) has been clicked
        if (event.key === "Enter"){
        localStorage.setItem('maintxt', event.target.innerText)
        // when enter has been clicked (doesnt go on new line)
        maintxt.blur()
    }
}
    else{
        localStorage.setItem('maintxt', event.target.innerText)
    }
}

 
// gettask 
function getTask(){
    if (localStorage.getItem('task') === null){
        task.textContent = '[Enter Todays Task]'
    }
    else {
        task.textContent = localStorage.getItem('task')
    }
}

// settask
function setTask(event){
    if (event.type === 'keypress'){
        //lets me know that enter(13th key) has been clicked
        if (event.key === "Enter"){
        localStorage.setItem('task', event.target.innerText)
        // when enter has been clicked (doesnt go on new line)
        task.blur()
    }
}
    else{
        localStorage.setItem('task', event.target.innerText)
    }
}


// event listener for typing in
maintxt.addEventListener('focus', setName),
maintxt.addEventListener('blur', setName)

task.addEventListener('focus', setTask),
task.addEventListener('blur', setTask)


// run code to display it last
showTime()
setBackground()
getTask()
getName()
