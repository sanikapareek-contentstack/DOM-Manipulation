
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
    countValue.innerText=`Count : ${count}`
}

function createCounter(){
    count=0;
    //creating elements
    const counterContainer=document.createElement("div");
    const counterHeading=document.createElement("h1");
    const counterPara=document.createElement("p");
    const btns=document.createElement("div");
    const incrementButton=document.createElement("button");
    const decrementButton=document.createElement("button");

    //assigning id and classes
    counterContainer.classList.add="counterContainer";
    counterContainer.className="counterContainer";
    counterContainer.id="counterContainer";
    counterHeading.classList.add="counterHeading";
    counterPara.id="countValue";
    incrementButton.id="increment";
    decrementButton.id="decrement";
    btns.className="counterBtns";

    //adding text to elements
    counterHeading.innerText="Counter";
    counterPara.innerText=`Count : ${count}`;
    incrementButton.innerText="+";
    decrementButton.innerText="-";

    //adding event listerner
    incrementButton.addEventListener('click',increment);
    decrementButton.onclick=decrement;


    //appending child
    counterContainer.appendChild(counterHeading);
    counterContainer.appendChild(counterPara);
    counterContainer.appendChild(btns)
    btns.appendChild(incrementButton);
    btns.appendChild(decrementButton);
     return counterContainer;


}

