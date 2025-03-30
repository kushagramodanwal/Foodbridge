document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is logged in
    function isLoggedIn() {
        return localStorage.getItem("user") !== null;
    }

    function checkLogin(event) {
        if (!isLoggedIn()) {
            event.preventDefault();
            alert("You need to log in first.");
            window.location.href = "login.html";
        }
    }

    // Ensure login check for donation-related actions
    document.getElementById("donate-now")?.addEventListener("click", checkLogin);
    document.getElementById("available-donations")?.addEventListener("click", checkLogin);

    // Handle Donation Form Submission
    const donateForm = document.getElementById("donateForm");
    if (donateForm) {
        donateForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const foodType = document.getElementById("foodType").value;
            const quantity = document.getElementById("quantity").value;
            const expiryDate = document.getElementById("expiryDate").value;
            const eventType = document.getElementById("eventType").value;
            const location = document.getElementById("location").value;

            // Convert expiry date to a Date object and compare with today
            const today = new Date();
            const expiry = new Date(expiryDate);

            if (expiry < today) {
                alert("Error: The expiry date must be in the future.");
                return;
            }

            if (foodType && quantity && expiryDate && eventType && location) {
                alert("Your donation has been submitted successfully!");

                // Remove all previous donations from storage
                localStorage.removeItem("donations");

                // Reset the form
                donateForm.reset();
            } else {
                alert("Please fill in all the fields before submitting.");
            }
        });
    }

    // Handle Accepting Donations
    document.querySelectorAll(".accept-donation-btn").forEach(button => {
        button.addEventListener("click", function () {
            if (!isLoggedIn()) {
                alert("You need to log in first.");
                window.location.href = "login.html";
                return;
            }

            const donationCard = this.closest(".donation-card");

            if (donationCard) {
                donationCard.remove(); // Remove the donation card from the page
                
                // Remove the donation from localStorage
                let donations = JSON.parse(localStorage.getItem("donations")) || [];
                donations = donations.filter(donation => 
                    donation.foodType !== donationCard.dataset.foodType || 
                    donation.quantity !== donationCard.dataset.quantity
                );
                localStorage.setItem("donations", JSON.stringify(donations));

                alert("You have successfully claimed this donation!");
            }
        });
    });
});
