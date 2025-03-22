document.addEventListener("DOMContentLoaded", function() { 
    const signup = document.getElementById("signup"); 
    const message = document.getElementById("emessage");
    const emailInput = document.getElementById("email");
    const subscribeButton = document.querySelector(".sb");
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    subscribeButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        const email = emailInput.value.trim();

        if (!validateEmail(email)) { 
            message.innerText = "Valid email required"; 
            message.style.display = "block"; 
            emailInput.style.border = "1px solid hsl(4, 100%, 67%)"; 
        } else {
            localStorage.setItem("userEmail", email); 
            window.location.href = "success.html"; 
        }
    });
});
