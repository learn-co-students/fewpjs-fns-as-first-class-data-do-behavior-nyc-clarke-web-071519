/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(str){
  const splitup = str.split(":")
  if(splitup[0] < 12){
    return "Good Morning"
  } else if (splitup[0] < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(str){
time = document.querySelector('#greeting')
time.innerText = str
}