// function displayTime(){
//     var dateTime = new Date();
//     var hrs = dateTime.getHour();
//     var min = dateTime.getMinutes();
//     var sec = dateTime.getSeconds();
//     var ampm = document.getElementById('ampm');
    
//     document.getElementById('hours').innerHTML = hrs;
//     document.getElementById('minutes').innerHTML = min;
//     document.getElementById('seconds').innerHTML = sec;
// }
// setInterval(displayTime, 10);

function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
  }
  
  setInterval(displayTime, 1000);