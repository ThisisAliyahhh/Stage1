function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toLocaleTimeString();
    const day = now.toLocaleString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time: ${utcTime}`;
    document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${day}`;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay(); 