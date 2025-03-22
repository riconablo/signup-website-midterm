document.addEventListener("DOMContentLoaded", function() { 
    const displayemail = document.querySelector(".user-email");
    const db = document.querySelector(".cb");

    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
        displayemail.innerText = storedEmail;
    }

    db.addEventListener("click", function() {
        localStorage.removeItem("userEmail");
        window.location.href = "index.html"; 
    });
});
