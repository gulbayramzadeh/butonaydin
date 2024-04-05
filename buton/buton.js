

let increasing = true;
document.getElementById("countButton").addEventListener("click", function() {
  let count = parseInt(document.getElementById("countButton").textContent);
  if (increasing) {
    count++;
    if (count > 10) {
      increasing = false;
      count = 9;
    }
  } else {
    count--;
    if (count < 1) {
      increasing = true;
      count = 2;
    }
  }
  document.getElementById("countButton").textContent = count;
});