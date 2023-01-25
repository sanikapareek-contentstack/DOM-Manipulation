let count=0;

function increment(){
    count=count+1;
    updateCounter();
}

function decrement(){
    count=count-1;
    updateCounter();
}

function updateCounter(){
    const countValue=document.getElementById("countValue");
    countValue.innerText=`count : ${count}`
}

function createCounter(){
    //creating elements
    const counterContainer=document.createElement("div");
    const counterHeading=document.createElement("h1");
    const counterPara=document.createElement("p");
    const incrementButton=document.createElement("button");
    const decrementButton=document.createElement("button");

    //assigning id and classes
    counterContainer.classList.add="counterContainer";
    counterHeading.classList.add="counterHeading";
    counterPara.id="countValue";
    incrementButton.id="increment";
    decrementButton.id="decrement";

    //adding text to elements
    counterHeading.innerText="Counter";
    counterPara.innerText=`count : ${count}`;
    incrementButton.innerText="+";
    decrementButton.innerText="-";

    //adding event listerner
    incrementButton.addEventListener('click',increment);
    decrementButton.onclick=decrement;


    //appending child
    counterContainer.appendChild(counterHeading);
    counterContainer.appendChild(counterPara);
    counterContainer.appendChild(incrementButton);
    counterContainer.appendChild(decrementButton);
    rootDiv=document.getElementById("root");
    rootDiv.appendChild(counterContainer);

}

createCounter();