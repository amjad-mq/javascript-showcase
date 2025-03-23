function countdown(targetDate) {
    const target = new Date(targetDate).getTime();
    
    const interval = setInterval(() => {
        const now = Date.now();
        const difference = target - now;

        if (difference <= 0) {
            console.log("🎉 Eid Mubarak! 🎉");
            clearInterval(interval);  // Stop the countdown
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        
        console.log(`⏳ Countdown to Eid: ${days}d ${hours}h ${minutes}m`);

    }, 3000);  
}

// 🌙 Eid-ul-Fitr 2025 Countdown (April 1, 2025)
countdown("2025-04-01 00:00:00");
