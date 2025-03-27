document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slides");

    function showSlides() {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 300000);
    }

    showSlides();
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


document.addEventListener("DOMContentLoaded", function() {
    (function() {
        emailjs.init("0xSbtzTkQkHx-GDPN"); // Your EmailJS Public Key
    })();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let submitButton = document.querySelector("#contactForm button");
        submitButton.innerText = "Sending...";
        submitButton.disabled = true;

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value.trim(),
            title: document.getElementById("message").value,
        };

        emailjs.send("service_y9qq4o8", "template_qjykylm", formData)
            .then(function(response) {
                alert("✅ Email sent successfully!");
                document.getElementById("contactForm").reset();
                submitButton.innerText = "Send Message";
                submitButton.disabled = false;
            }, function(error) {
                alert("❌ Failed to send email. Please try again.");
                console.error("Error:", error);
                submitButton.innerText = "Send Message";
                submitButton.disabled = false;
            });
    });
});
