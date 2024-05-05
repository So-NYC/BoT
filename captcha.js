function generateRandomNumbers() {
    // Generate random numbers for x and y
    const x = Math.floor(Math.random() * 10); // Change the range as needed
    const y = Math.floor(Math.random() * 10); // Change the range as needed

    // Display the random numbers
    document.getElementById("x-value").textContent = x;
    document.getElementById("y-value").textContent = y;
}

function verifySum(targetsite) {
    const x = parseInt(document.getElementById("x-value").textContent);
    const y = parseInt(document.getElementById("y-value").textContent);
    const userSum = parseInt(document.getElementById("user-sum").value);

    if (userSum === x + y) {
        // Redirect to your website if correct
        const buttonElement = document.getElementById("myButton");
        buttonElement.textContent = "Confirm";
        generateRandomNumbers();
        window.open(targetsite);
        // window.location.href = "https://facebook.com";
    } else {
        alert("Try again !");
        const buttonElement = document.getElementById("myButton");
        buttonElement.textContent = "Try Again";
        generateRandomNumbers();
        // window.open('http://pornhub.com');
    }
}
