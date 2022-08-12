/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "Script Running" in the browser's dev tools console
console.log('Script Running');
// select the input and save it as a variable
const inputBox = document.querySelector("#userInput");
console.log(inputBox);

//select the element that displays the name of the city
const imgBox=document.querySelector("#textBox");
//test to make sure
console.log(imgBox);

//select the element that displays the vitory message
const victMsg = document.querySelector("#message");
console.log(victMsg);

//interact with the elements on our page
//click event e stand for event
inputBox.addEventListener("click",(e)=>{
  console.log("you clicked the inout box");
});
//change event
inputBox.addEventListener("change",(e)=>{
  console.log("you clicked return");
});

// check the input
inputBox.addEventListener("input",(e)=>{
  console.log(inputBox.value);
});
//use the values to do something on our web page
inputBox.addEventListener("input",(e)=>{
   if (inputBox.value === "cucumber"){
     console.log("You got cucumber");
     imgBox.innerHTML += `<div id="cucumber">
          <h2 class="food">cucumber</h2>
        </div>`
   } else if(inputBox.value ==="grape"){
     imgBox.innerHTML += `<div id="grape">
        <h2 class="food">grape</h2>
        </div>`
   }else if(inputBox.value ==="raspberry"){
     imgBox.innerHTML += `<div id="raspberry">
        <h2 class="food">raspberry</h2>
        </div>`
   }
  else if(inputBox.value ==="tomato"){
     imgBox.innerHTML += `<div id="tomato">
        <h2 class="food">tomato</h2>
        </div>`
   }
});