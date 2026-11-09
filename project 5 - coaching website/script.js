// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerText = "✕";
    } else {
        menuBtn.innerText = "☰";
    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.innerText = "☰";

    });

});


// =========================
// FAQ ACCORDION
// =========================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem =
            question.parentElement;

        document.querySelectorAll(".faq-item")
            .forEach(function (item) {

                if (item !== currentItem) {
                    item.classList.remove("active");
                }

            });

        currentItem.classList.toggle("active");

    });

});


// =========================
// WHATSAPP ENQUIRY FORM
// =========================

const enquiryForm =
    document.getElementById("enquiryForm");


enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const studentName =
        document.getElementById("studentName").value.trim();

    const parentName =
        document.getElementById("parentName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const course =
        document.getElementById("course").value;

    const message =
        document.getElementById("message").value.trim();


    const whatsappNumber =
        "9198********";


    const whatsappMessage =

        `Hello Achievers Academy,

I would like to enquire about admission.

Student Name: ${studentName}

Parent Name: ${parentName}

Phone: ${phone}

Course: ${course}

Message:
${message || "I would like to know more about the course, fees and batch timings."}

Please share the details. Thank you.`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

});


// =========================
// PHONE NUMBER VALIDATION
// =========================

const phoneInput =
    document.getElementById("phone");


phoneInput.addEventListener("input", function () {

    this.value =
        this.value.replace(/\D/g, "").slice(0, 10);

});


// =========================
// CURRENT YEAR
// =========================

const currentYear =
    new Date().getFullYear();

const footerText =
    document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerText =
        `© ${currentYear} Achievers Academy. All rights reserved.`;

}