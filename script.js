function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${utcTime}`;
    document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${day}`;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay(); 