// Basic Calculator

// Function to subtract numbers
function subtract(x, y) {
    return x - y;
}

// Function to add numbers
function add(x, y) {
    return x + y;
}

// Function to multiply numbers
function multiply(x, y) {
    return x * y;
}

// Function to divide numbers
function divide(x, y) {
    return x / y;
}

alert(
    "Welcome to the Basic calculator!\n\nThis app will help you calculate simple mathematical tasks."
);

alert(
    "Which operation would you like to perform?\n\n1. Add\n2. Subtract\n3. Multiply\n4. Divide"
);

while (true) {
    // Get user input
    let choice = prompt("\nEnter your choice : ");
    let choices = ["1", "2", "3", "4"];

    // Check if user input is valid
    if (choices.includes(choice)) {
        let x = parseInt(prompt("Enter first number: "));
        let y = parseInt(prompt("Enter second number: "));

        // Perform operation
        switch (choice) {
            case "1":
                alert(`${x} + ${y} = ${add(x, y)}`);
                break;
            case "2":
                alert(`${x} - ${y} = ${subtract(x, y)}`);
                break;
            case "3":
                alert(`${x} x ${y} = ${multiply(x, y)}`);
                break;
            case "4":
                alert(`${x} / ${y} = ${divide(x, y)}`);
                break;
        }
    } else {
        alert("Invalid choice. Please try again.");
    }
    break;
}