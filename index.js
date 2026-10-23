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

    // Check if both inputs are completed and the time is valid
    if (energyLevel === "" ||
        document.getElementById("available-time").value === "" ||
        !document.getElementById("available-time").validity.valid ||
        availableTime < 1 || availableTime > 180) {

        recommendation = "Please select your energy level and enter a valid whole number between 1 and 180 minutes.";

    }

    //Outcome 1 - High Energy and Enough Time 
    else if (energyLevel === "high" && availableTime >= 60) {

        recommendation = "Deep Focus Session: You have high energy and sufficient time. Consider tackling a challenging task, assignment or working on a new project.";

    }

    //Outcome 2 - Medium Energy and Enough Time
    else if (energyLevel=== "medium" && availableTime >= 45) {

        recommendation = "Moderate Focus Session: You have decent energy and enough time. Consider reviewing your notes, completing practice questions, or working on assignments.";

    }

    //Outcome 3 - Low Energy and Short Study Time
    else if (energyLevel === "low" && availableTime <= 15) {

        recommendation = "Quick Review Session: You have low energy and limited time. Focus on reviewing important notes, definitions, or key concepts.";

    }

    //Outcome 4 - Low Energy and Enough Time
    else if (energyLevel === "low" && availableTime >= 30) {

        recommendation = "Light Study Session: You have low energy but enough time. Consider doing light reading, organizing your study materials, or watching educational/intellectual videos.";

    }

    //Outcome 5 - High Energy and Short Study Time 
    else if (energyLevel === "high" && availableTime <= 30) {

        recommendation = "Quick Task Session: You have high energy but limited time. Prioritize important tasks or concepts that could make the biggest difference to your study progress.";
    }

    //Outcome 6 - Medium Energy and Short Study Time
    else if (energyLevel === "medium" && availableTime <= 30) {

        recommendation = "Focused Task Session: You have medium energy and limited time. Focus on a single task or topic that can be completed in the available time, such as a short assignment, a few practice questions, or reviewing a specific concept.";

    }

    //Outcome 7 - All Other Valid Combinations 
    else {

        recommendation = "General Study Session: Based on your available energy and time, consider reviewing notes, completing manageable assignments, or practicing questions.";

    }


    // Display the recommendation
    document.getElementById("recommendation-text").innerHTML = recommendation;

      // Show values in the console for testing
    console.log("Energy Level: " + energyLevel);
    console.log("Available Time: " + availableTime);
    console.log("Recommendation: " + recommendation);

}

/* Function to reset the choices and recommendation */
function resetChoices() {

    energyLevel = "";
    availableTime = 0;
    recommendation = "";

    document.getElementById("energy-level").value = "";
    document.getElementById("available-time").value = "";

    document.getElementById("recommendation-text").innerHTML =
        'Enter your energy level and available time, then click "Get Recommendation" to see your study suggestion.';

    console.log("Choices have been reset.");
}

/* Run the functions when the buttons are clicked */
document.getElementById("get-recommendation").onclick = generateRecommendation;
document.getElementById("reset").onclick = resetChoices;
