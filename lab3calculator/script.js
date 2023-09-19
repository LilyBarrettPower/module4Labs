document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('equals').addEventListener('click', () => { // The JS code waits for someone to click the equals button
        const input1 = parseFloat(document.getElementById('input1').value);
        const input2 = parseFloat(document.getElementById('input2').value);
        //retrieve the values from the two input fields 
        const operator = document.getElementById('operator').value;

        let result;

        switch (operator) {
            case "addition":
                result = input1 + input2;
                break;
            case "subtraction":
                result = input1 - input2;
                break;
            case "multiplication":
                result = input1 * input2;
                break;
            case "division":
                if (input2 === 0) {
                    result = "Cannot divide by 0"; // error will occur if you try to divide by 0
                } else {
                    result = input1 / input2;
                }
                break;
            default:
                result = "Invalid operation";
                //using a switch statement to determine which operation should be preformed based on the operator chosen from dropdown
        }
        document.getElementById('result').innerText = result; // display the result in the results section 
    });

    document.getElementById('reset').addEventListener("click", () => { // when the reset button is clicked, all values should go back to default
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("operator").value = "addition";
        document.getElementById("result").innerText = "..."
    });
});  