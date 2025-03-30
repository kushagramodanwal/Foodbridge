document.getElementById("donateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const foodType = document.getElementById("foodType").value;
    const quantity = document.getElementById("quantity").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const eventType = document.getElementById("eventType").value;
    const location = document.getElementById("location").value;

    if (foodType && quantity && expiryDate && eventType && location) {
        alert("Your donation has been submitted successfully!");
        document.getElementById("donateForm").reset();
    } else {
        alert("Please fill in all the fields before submitting.");
    }
});
