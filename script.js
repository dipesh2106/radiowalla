const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const forms = document.querySelectorAll("form[data-lead-form]");
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent = "Thanks! Our team will reach out within 1 business day.";
    }
    form.reset();
  });
});
