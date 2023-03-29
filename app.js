function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let am = 'AM';

  if (hours > 12){
      hours = hours -12;
  }
  if (hours == 0){
      hours = 12;
  }
  if (hours < 10){
      hours = '0' + hours;
  }
  if (minutes < 10){
      minutes = '0' + minutes;
}
if (seconds < 10){
    seconds = '0' + seconds;
}
if (hours > 12){
  am = PM
}

  let time = hours + ":" + minutes + ":" + seconds + " " + am;
  document.getElementById("clock").innerHTML = time;
}

setInterval(displayTime, 1000);