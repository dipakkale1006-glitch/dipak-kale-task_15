// Task 15: JavaScript - Array Operations using Different Function Types
// 1. Maximum number in the array (Named Function)
// 2. Sum of all elements in the array (Anonymous Function Expression)
// 3. Count of odd numbers in the array (Arrow Function)


// 1. Named Function: Finds the maximum number in an array
function findMax(arr) {
    if (!arr || arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


// 2. Anonymous Function Expression: Calculates the sum of all elements in an array
const calculateSum = function (arr) {
    if (!arr || arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};


// 3. Arrow Function: Counts the number of odd numbers in an array
const countOddNumbers = (arr) => {
    if (!arr || arr.length === 0) return 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
};


// Dummy array for testing (as specified in assignment instructions)
const dummyArray = [4, 8, 2, 11, 6, 7, 10];

// Execute operations using the defined functions
let maxNum = findMax(dummyArray);
let totalSum = calculateSum(dummyArray);
let oddCount = countOddNumbers(dummyArray);

// Display results to the console matching the sample output format
console.log("Ex Array:- [" + dummyArray.join(", ") + "]");
console.log("Maximum number: " + maxNum);
console.log("Sum of all elements: " + totalSum);
console.log("Count of odd numbers: " + oddCount);


// Additional dummy array test for verification
const dummyArray2 = [15, 22, 9, 34, 51, 8, 3];
console.log("\nEx Array 2:- [" + dummyArray2.join(", ") + "]");
console.log("Maximum number: " + findMax(dummyArray2));
console.log("Sum of all elements: " + calculateSum(dummyArray2));
console.log("Count of odd numbers: " + countOddNumbers(dummyArray2));


// Part 2: Interactive Webpage UI Logic
if (typeof document !== "undefined") {
    const form = document.getElementById("arrayForm");
    const arrayInput = document.getElementById("arrayInput");
    const chipsWrap = document.getElementById("chipsWrap");
    const valMax = document.getElementById("valMax");
    const valSum = document.getElementById("valSum");
    const calcDetail = document.getElementById("calcDetail");
    const valOddCount = document.getElementById("valOddCount");
    const oddDetail = document.getElementById("oddDetail");
    const presetButtons = document.querySelectorAll(".btn-preset");

    // Helper to parse comma separated string into an array of numbers
    function parseArray(inputStr) {
        return inputStr
            .split(",")
            .map(function (item) {
                return item.trim();
            })
            .filter(function (item) {
                return item !== "" && !isNaN(Number(item));
            })
            .map(Number);
    }

    // Function to update the webpage dashboard
    function updateDashboard(arr) {
        if (!arr || arr.length === 0) {
            alert("Please enter at least one valid number.");
            return;
        }

        // Call our three functions
        const max = findMax(arr);
        const sum = calculateSum(arr);
        const odds = countOddNumbers(arr);

        // Find which elements are odd for detail string
        const oddElements = arr.filter(function (n) {
            return n % 2 !== 0;
        });

        // Render chips
        chipsWrap.innerHTML = "";
        arr.forEach(function (num) {
            const chip = document.createElement("span");
            const isOdd = num % 2 !== 0;
            chip.className = "chip " + (isOdd ? "chip-odd" : "chip-even");
            if (num === max) {
                chip.classList.add("chip-max");
                chip.title = "Maximum Number";
            }
            chip.textContent = num;
            chipsWrap.appendChild(chip);
        });

        // Update output values
        valMax.textContent = max;
        valSum.textContent = sum;
        calcDetail.textContent = "Calculation: " + arr.join(" + ") + " = " + sum;

        valOddCount.textContent = odds;
        oddDetail.textContent = odds > 0
            ? "Odd elements found: " + oddElements.join(", ")
            : "No odd numbers in this array";

        // Also log to console on user interaction
        console.log("\n--- User Input Array Analysis ---");
        console.log("Ex Array:- [" + arr.join(", ") + "]");
        console.log("Maximum number: " + max);
        console.log("Sum of all elements: " + sum);
        console.log("Count of odd numbers: " + odds);
    }

    // Preset buttons click handlers
    presetButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const arrStr = btn.getAttribute("data-arr");
            arrayInput.value = arrStr;
            updateDashboard(parseArray(arrStr));
        });
    });

    // Form submit handler
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const parsed = parseArray(arrayInput.value);
        updateDashboard(parsed);
    });

    // Form reset handler
    form.addEventListener("reset", function () {
        setTimeout(function () {
            arrayInput.value = "4, 8, 2, 11, 6, 7, 10";
            updateDashboard([4, 8, 2, 11, 6, 7, 10]);
        }, 0);
    });

    // Initial render on page load
    updateDashboard(dummyArray);
}
