document.addEventListener("DOMContentLoaded", function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = dayNames[now.getUTCDay()];

        document.getElementById("currentTime").innerText = `Current Time (UTC): ${utcTime}`;
        document.getElementById("currentDay").innerText = `Current Day: ${day}`;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 60000); 
});


document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("slackProfilePicture");
    img.onload = function() {
        console.log("Natural Width: " + img.naturalWidth);
        console.log("Natural Height: " + img.naturalHeight);
        if (img.naturalWidth !== img.width || img.naturalHeight !== img.height) {
            console.error("The image dimensions do not match the natural dimensions.");
        }
    };
});


// Typed js
const typed = new Typed('.multiText', {
    strings: ['My Tech goals for the next two years.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelayo: 1000,
    loop: true
});