const startElement = document.getElementById("start")
const stopElement = document.getElementById("stop")
const resetElement = document.getElementById("reset")
const timerEl = document.getElementById("timer")
const inputTimeEl = document.getElementById("InputTime")
let interval;
let timeLeft = 1500;

function UpdateTimer(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2, "0")}`
    

    timerEl.innerHTML = formattedTime
}
function startTimer(){
    timeLeft = parseInt(inputTimeEl.value) || 1500
    interval = setInterval(() => {
        timeLeft--;
        UpdateTimer()
        if(timeLeft == 0){
            clearInterval(interval);
            timerEl.innerHTML = "Bro come back soon";
            timeLeft = parseInt(inputTimeEl.value) || 1500;
            UpdateTimer();
        }
    }, 1000)
}
function stopTimer(){
    clearInterval(interval);
}
function resettimer(){
    clearInterval(interval);
    timeLeft = 1500;
    UpdateTimer();
}

startElement.addEventListener("click", startTimer)
stopElement.addEventListener("click", stopTimer)
resetElement.addEventListener("click", resettimer)
UpdateTimer();