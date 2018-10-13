const entry = document.querySelector('.js-entry-point');
const runTime = () => {

  let now = new Date().getTime();
  let election = new Date(2018, 10, 6, 0, 0, 0).getTime()
  let difference = election - now;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
  let minutes = Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60))
  let seconds = Math.floor(((difference % (1000 * 60)) / 1000))
  let millis = Math.floor((difference % 10))
  const html = `
    <p class="timer__inner">${days} ${hours} ${minutes} ${seconds} ${millis}</p>
  `

  entry.innerHTML = html;
}


setInterval(runTime, 100)
