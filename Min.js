-var Button = document.getElementById("button1");
var total = document.getElementById("total");

Button.addEventListener("click", result);

function result() {
    total.innerHTML += 1;
    sum += 1;
    total.innerHTML = sum;
    total.innerText = parseInt(total.innerText) + 1;
}

/*

Step 1:
Not complete. Pressing the button returns a string.

Step 2:
Not complete

From Kenn
*/