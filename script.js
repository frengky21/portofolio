const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const year = document.querySelector("#year");
const hero = document.querySelector(".hero");
const animatedItems = document.querySelectorAll(
    ".section-header, .about-text, .info-card, .org-photo-card, .skill-card, .project-card, .content-copy, .social-shot, .contact-copy, .contact-item"
);
const profilePanel = document.querySelector(".profile-panel");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

if (!reduceMotion) {
    animatedItems.forEach((item, index) => {
        item.classList.add("reveal");
        item.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
    });

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            rootMargin: "0px 0px -12% 0px",
            threshold: 0.12,
        }
    );

    animatedItems.forEach((item) => revealObserver.observe(item));

    profilePanel?.addEventListener("pointermove", (event) => {
        const rect = profilePanel.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        profilePanel.style.transform = `translateY(-6px) rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
    });

    profilePanel?.addEventListener("pointerleave", () => {
        profilePanel.style.transform = "";
    });

    hero?.addEventListener("pointermove", (event) => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        hero.style.setProperty("--pointer-x", `${x * -14}px`);
        hero.style.setProperty("--pointer-y", `${y * -10}px`);
    });

    hero?.addEventListener("pointerleave", () => {
        hero.style.setProperty("--pointer-x", "0px");
        hero.style.setProperty("--pointer-y", "0px");
    });
}

console.log("Halo! Terima kasih sudah mengunjungi portofolio Dudul.");
