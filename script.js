const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById("results-div");


const checkFormat = (str) => {
    const regex = /1?\s?(\(\d{3}\)|\d{3})([-\s])?\d{3}([-|\s])?\d{4}/;
    return regex.test(str);
}




const checkInput = (str) => {
    if (str.length === 0) {
        alert("Please provide a phone number");
        return;
    }

    const p = document.createElement("p");
    p.className = "results-text";



    if (checkFormat(str)) {
        p.textContent = `Valid US number: ${str}`;
        p.classList.add("valid-results");
    }
    else {
        p.textContent = `Invalid US number: ${str}`;
        p.classList.add("invalid-results");
    }

    resultsDiv.appendChild(p);
    
}

checkBtn.addEventListener("click", () => checkInput(input.value));