
function counterCall(){
    if(document.getElementById("counterContainer")){
        const ele=document.getElementById("counterContainer");
        ele.remove();
    }
    if(document.getElementById("timerContainer")){
        const ele=document.getElementById("timerContainer");
        ele.remove();
    } 
    const counter=createCounter();
    rootDiv=document.getElementById("root");
    rootDiv.appendChild(counter);
    
}

function timerCall(){
    if(document.getElementById("counterContainer")){
        const ele=document.getElementById("counterContainer");
        ele.remove();
    }
    if(document.getElementById("timerContainer")){
        const ele=document.getElementById("timerContainer");
        ele.remove();
    }
    const timer=createTimer();
    rootDiv=document.getElementById("root");
    rootDiv.appendChild(timer);
}

function createMainPage(){
    //creating elements
    const container=document.createElement("div");
    const containerHeading=document.createElement("h1")
    const radioBtns=document.createElement("div");
    const counterButton=document.createElement("input");
    const counterLabel=document.createElement("label");
    const timerButton=document.createElement("input");
    const timerLabel=document.createElement("label");

    //adding type,value and name for radio and text for label
    counterButton.type="radio";
    counterButton.value="Counter";
    counterButton.name="radioBtn";
    counterLabel.innerText="Counter";
    timerButton.type="radio";
    timerButton.value="Timer";
    timerButton.name="radioBtn"
    timerLabel.innerText="Timer"
    containerHeading.innerText="DOM Manipulation: Counter and Timer"
    

    //adding id and classes
    container.classList.add= "container";
    container.className="container";
    radioBtns.className="radioBtns";
    counterButton.id="counterBtn";
    timerButton.id="timerBtn";
    counterLabel.id="counterLabel";
    timerLabel.id="timerLabel";


    //adding event listener
    counterButton.addEventListener('click',counterCall);
    timerButton.addEventListener('click',timerCall);

    //appending child
    container.appendChild(containerHeading);
    container.appendChild(radioBtns)
    radioBtns.appendChild(counterButton);
    radioBtns.appendChild(counterLabel)
    radioBtns.appendChild(timerButton);
    radioBtns.appendChild(timerLabel);
    rootDiv=document.getElementById("root");
    console.log(rootDiv.innerHTML);
    rootDiv.appendChild(container)
}

createMainPage();