const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

function closeMenu() {
    navMenu?.classList.remove("active");
    hamburger?.classList.remove("active");
    hamburger?.setAttribute("aria-expanded", "false");
}

hamburger?.addEventListener("click", () => {
    const isOpen = navMenu?.classList.toggle("active");
    hamburger.classList.toggle("active", Boolean(isOpen));
    hamburger.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (targetId?.startsWith("#")) {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                history.pushState(null, "", targetId);
            }
        }

        closeMenu();
    });
});

window.addEventListener("click", (event) => {
    const target = event.target;

    if (
        navMenu?.classList.contains("active") &&
        target instanceof Element &&
        !target.closest(".nav-menu") &&
        !target.closest(".hamburger")
    ) {
        closeMenu();
    }
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    },
    {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
    }
);

sections.forEach((section) => observer.observe(section));

console.log("Halo! Terima kasih sudah mengunjungi portofolio Dudul.");
