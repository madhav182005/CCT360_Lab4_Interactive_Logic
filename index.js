// CCT360 Lab 4 - Interactive Logic
// Study Session Decision Helper


// Variables to store the user's choices and recommendation
let energyLevel = "";
let availableTime = 0;
let recommendation = "";


// Function to generate a recommendation based on user input
function generateRecommendation() {
    // Get user input values
    energyLevel = document.getElementById("energyLevel").value;
    availableTime = parseInt(document.getElementById("availableTime").value);

    // Determine recommendation based on energy level and available time
    if (energyLevel === "high" && availableTime >= 60) {
        recommendation = "You have high energy and plenty of time! Consider tackling a challenging topic or doing a deep dive into your studies.";
    } else if (energyLevel === "high" && availableTime < 60) {
        recommendation = "You have high energy but limited time. Focus on quick review sessions or practice problems.";
    } else if (energyLevel === "medium" && availableTime >= 60) {
        recommendation = "You have medium energy and enough time. A balanced study session with breaks could be effective.";
    } else if (energyLevel === "medium" && availableTime < 60) {
        recommendation = "You have medium energy but limited time. Consider a focused study session on key concepts or a short review.";
    } else if (energyLevel === "low" && availableTime >= 60) {
        recommendation = "You have low energy but enough time. Try a light study session or review notes to stay engaged without overexerting yourself.";
    } else if (energyLevel === "low" && availableTime < 60) {
        recommendation = "You have low energy and limited time. It might be best to take a break or do a quick review of essential material.";
    } else {
        recommendation = "Please select your energy level and available time to get a recommendation.";
    }

    // Display the recommendation
    document.getElementById("recommendation").innerText = recommendation;
}