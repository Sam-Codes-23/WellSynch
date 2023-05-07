// JavaScript source code
const moodForm = document.getElementById("mood-form");
const moodChart = document.getElementById("mood-chart");

moodForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const mood = document.getElementById("mood").value;
    const timestamp = new Date().toLocaleString();

    const moodItem = document.createElement("div");
    moodItem.classList.add("mood-item", mood);
    moodItem.textContent = `${mood.charAt(0).toUpperCase() + mood.slice(1)} - ${timestamp}`;

    moodChart.prepend(moodItem);

    const moodData = {
        mood: mood,
        timestamp: timestamp,
    };

    saveMood(moodData);
    moodForm.reset();
});

function saveMood(moodData) {
    const savedMoods = JSON.parse(localStorage.getItem("moods")) || [];
    savedMoods.unshift(moodData);
    localStorage.setItem("moods", JSON.stringify(savedMoods));
}


