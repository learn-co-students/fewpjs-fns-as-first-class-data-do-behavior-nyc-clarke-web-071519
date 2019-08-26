function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  const split = time.split(":")
  if (split[0] < 12) {
    return "Good Morning"
  } else if (split[0] < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  time = document.querySelector('#greeting')
  time.innerText = string
}