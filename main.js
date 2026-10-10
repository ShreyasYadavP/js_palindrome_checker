function checkPalindrome() {
            const input = document.getElementById("input").value;
            const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            const reversedInput = cleanedInput.split("").reverse().join("");
            const result = document.getElementById("result");

            if (cleanedInput === reversedInput) {
                result.textContent = `"${input}" is a palindrome.`;
            } else {
                result.textContent = `"${input}" is not a palindrome.`;
            }
            input.value = "";
        }