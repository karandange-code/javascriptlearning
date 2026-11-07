 
// MOBILE MENU
 

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerText = "✕";
    } else {
        menuBtn.innerText = "☰";
    }

});

 
// CLOSE MOBILE MENU
 

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.innerText = "☰";

    });

});


 // CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const goal = document.getElementById("goal").value;
    const message = document.getElementById("message").value.trim();

    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        goal === "" ||
        message === ""
    ) {

        alert("Please fill all required fields.");

        return;

    }

    // Your gym's WhatsApp number
    const whatsappNumber = "9179XXXXXXXX";

    const whatsappMessage =
        `🏋️ NEW GYM ENQUIRY

Name: ${name}
Phone: ${phone}
Email: ${email}
Goal: ${goal}

Message:
${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    contactForm.reset();

});
 


 
// SCROLL REVEAL
 

const sections = document.querySelectorAll(
    ".section, .program-card, .trainer-card, .price-card, .testimonial"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


sections.forEach(function (section) {

    section.classList.add("reveal");

    observer.observe(section);

});

 
// ADD REVEAL STYLE
 

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.reveal {
    opacity: 0;
    transform: translateY(35px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(revealStyle);


 
// CURRENT YEAR
 

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    `© ${currentYear} RID FITNESS . All rights reserved.`;