let hour=0;
let min=0;
let sec=0;
let displayHour=0;
let displayMin=0;
let displaySec=0;
let timeoutId=null;

//to calculate sec, min and hour
function timer(){
    sec++;
    if(sec/60==1){
        min++;
        sec=0;
    }
    if(min/60==1){
        hour++;
        min=0;
    } 
    //to display the timer
    if(sec<10){
        displaySec="0"+sec.toString();
    }else{
        displaySec=sec.toString();
    }
    
    if(min<10){
        displayMin="0"+min.toString();
    }else{
        displayMin=min.toString();
    }
    
    if(hour<10){
        displayHour="0"+hour.toString();
    }else{
        displayHour=hour.toString();
    }
    const timerValue=document.getElementById("timerValue");
    timerValue.innerText=`${displayHour}:${displayMin}:${displaySec}`;
}

//start timer
function startTimer(){
    timeoutId=setInterval(timer,1000);
}

//reset timer
function resetTimer(){
    clearInterval(timeoutId);
    sec=0;
    min=0;
    hour=0;
    displayHour=0;
    displayMin=0;
    displaySec=0;
    const timerValue=document.getElementById("timerValue");
    timerValue.innerText="00:00:00";
}

//pause Timer
function pauseTimer(){
    clearInterval(timeoutId);
}

function createTimer(){
    sec=0;
    min=0;
    hour=0;
    displayHour=0;
    displayMin=0;
    displaySec=0;
    //creating element
    const timerContainer=document.createElement("div");
    const timerHeading=document.createElement("h1");
    const timerPara=document.createElement("p");
    const btns=document.createElement("div");
    const startButton=document.createElement("button");
    const pauseButton=document.createElement("button");
    const resetButton=document.createElement("button")

    //adding id and classes
    timerContainer.classList.add="timerContainer";
    timerContainer.className="timerContainer";
    timerContainer.id="timerContainer";
    timerHeading.classList.add="timerHeading";
    timerPara.id="timerValue";
    startButton.id="startBtn";
    pauseButton.id="pauseBtn";
    resetButton.id="resetBtn";
    btns.className="timerBtns";

    //adding text
    timerHeading.innerText="Timer";
    timerPara.innerText="00:00:00";
    startButton.innerText="Start";
    pauseButton.innerText="Pause";
    resetButton.innerText="Reset";

    //adding event listener
    startButton.addEventListener('click',startTimer);
    resetButton.addEventListener('click',resetTimer);
    pauseButton.addEventListener('click',pauseTimer);


    //appending child
    timerContainer.appendChild(timerHeading);
    timerContainer.appendChild(timerPara);
    timerContainer.appendChild(btns);
    btns.appendChild(startButton);
    btns.appendChild(pauseButton);
    btns.appendChild(resetButton);
    

    return timerContainer;

}

