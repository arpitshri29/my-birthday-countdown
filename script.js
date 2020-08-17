const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loader = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const birthday = new Date(`April 29 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerHTML = currentYear + 1;

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = birthday - currentTime;

    // Divide by 1000 to get the number in seconds instead of milliseconds, divide by 60 to get minutes, divide again by 60 we gwt hours, similarly divide by 24.
    const d = Math.floor(diff/ 1000/ 60/ 60/ 24);
    const h = Math.floor(diff/ 1000/ 60/ 60) % 24;
    const m = Math.floor(diff/ 1000/ 60) % 60;
    const s = Math.floor(diff/ 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h; // Adding 0 to singular numbers, so that, say, 5 will become as 05, etc.
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show Loader before countdown
setTimeout(() => {
    loader.remove();
    // countdown.style.visibility = 'visible';
    countdown.style.display = 'flex';
}, 1000);

// Run updateCountdown() function every second
setInterval(updateCountdown, 1000);
