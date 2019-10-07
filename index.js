/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = timeString => {
  if (parseInt(timeString, 10) > 17) return "Good Evening";
  else if (parseInt(timeString, 10) < 12) return "Good Morning";
  else return "Good Afternoon";
};
/* Write your implementation of displayMessage() */
const displayMessage = msg => {
  document.getElementById("greeting").innerText = msg;
};
