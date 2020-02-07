/*===============
    countDown
================*/

let countDownEl = document.querySelector('.countDown');

let countDownDate = new Date('Sep 19, 2020 16:30:00').getTime();

//calculate the time remaining every second
let updateCount = setInterval(()=>{

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //insert the time into the page
  countDownEl.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds
 + 's';
}, 1000)
