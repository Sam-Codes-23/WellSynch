// JavaScript source code
document.getElementById("exercise-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const exerciseName = document.getElementById("exercise-name").value;
    const reps = document.getElementById("reps").value;
    const sets = document.getElementById("sets").value;

    const listItem = document.createElement("li");
    listItem.textContent = `${exerciseName} - ${reps} reps x ${sets} sets`;

    document.getElementById("exercise-list").appendChild(listItem);

    document.getElementById("exercise-name").value = "";
    document.getElementById("reps").value = "";
    document.getElementById("sets").value = "";
});
