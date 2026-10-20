// CCT360 Lab 4 - Interactive Logic
// Study Session Decision Helper


// Variables to store the user's choices and recommendation
let energyLevel = "";
let availableTime = 0;
let recommendation = "";


// Function to generate a recommendation based on user input
function generateRecommendation() {

    // Store the user's selected energy level and available time
    energyLevel = document.getElementById("energy-level").value;
    availableTime = Number(document.getElementById("available-time").value);
