const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Prevent choosing a date in the past.
const dateInput = document.querySelector("#date");
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  dateInput.min = localToday;
}

// Demo-only form: validates details and displays a confirmation on this page.
// To receive real bookings, connect this form to WhatsApp, email, or a booking backend.
const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");

if (bookingForm && formMessage) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!bookingForm.reportValidity()) return;

    const formData = new FormData(bookingForm);
    const name = String(formData.get("name") || "").trim();
    const service = String(formData.get("service") || "");
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");

    formMessage.textContent =
      `Thanks, ${name}! Your ${service} request for ${date} at ${time} is ready. ` +
      "This is only a demo confirmation; the salon has not received your request.";
    formMessage.classList.add("show");
    formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
