const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");

function onScroll() {
  if (header) header.classList.toggle("scrolled", window.scrollY > 24);
}

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "x" : "+";
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "+";
    }
  });
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })
  : null;

document.querySelectorAll(".reveal").forEach((node) => {
  if (observer) observer.observe(node);
  else node.classList.add("in");
});

document.querySelectorAll("[data-mail-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const area = data.get("area") || "General enquiry";
    const message = data.get("message") || "";
    const body = `Name: ${name}\nEmail: ${email}\nRegarding: ${area}\n\n${message}`;
    window.location.href = `mailto:enquiries@mjgroup.nz?subject=${encodeURIComponent(`MJ Group enquiry - ${area}`)}&body=${encodeURIComponent(body)}`;
  });
});
