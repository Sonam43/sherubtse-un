// JavaScript function to handle form validation (if you have any validation)
document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Sample validation logic
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill out all fields.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        // Submit the form if valid
        alert("Form submitted successfully!");
        // Here you could use an AJAX call or submit the form normally, depending on your needs
        // document.getElementById('signup').submit();  // Uncomment to submit the form
    }
});

// JavaScript function to go back to the previous page
function goBack() {
    window.history.back(); // This takes the user back to the previous page in their browser history
}
