const password = "Launceston23";  // Set your password here

function validatePassword() {
    const userInput = document.getElementById("passwordInput").value;
    if (userInput === password) {
        document.getElementById("passwordArea").style.display = "none";
        document.getElementById("mainContent").style.display = "flex";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
