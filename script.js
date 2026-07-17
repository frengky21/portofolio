// ========================================
// SMOOTH SCROLLING & NAVBAR HIGHLIGHTING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar link active state
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================


// ========================================
// PARALLAX EFFECT ON SCROLL
// ========================================


// ========================================
// ANIMATED COUNTER (jika diperlukan)
// ========================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ========================================
// ANIMATED BACKGROUND
// ========================================


// ========================================
// SCROLL REVEAL EFFECT
// ========================================


// ========================================
// SMOOTH PAGE LOAD
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.animation = 'none';
});

// ========================================
// ADD ACTIVE CLASS TO NAV LINKS
// ========================================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ========================================
// FORM SUBMISSION (if needed)
// ========================================

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih telah menghubungi saya! Saya akan segera membalas.');
        this.reset();
    });
}

// ========================================
// CONSOLE GREETING
// ========================================

console.log(
    '%c🚀 Halo! Saya adalah Dudul',
    'color: #667eea; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cTerima kasih sudah mengunjungi portfolio saya!',
    'color: #f093fb; font-size: 14px;'
);
console.log(
    '%cHubungi saya: @agent_dudul (Instagram & TikTok)',
    'color: #667eea; font-size: 12px;'
);

// ========================================
// DYNAMIC YEAR IN FOOTER
// ========================================

const yearSpan = document.querySelector('.footer-content p');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    // Update jika ada placeholder year
}

// ========================================
// ADD HOVER EFFECT TO BUTTONS
// ========================================

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// LAZY LOADING IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// TYPING ANIMATION FOR SUBTITLE (optional)
// ========================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to activate:
// const subtitle = document.querySelector('.hero-subtitle');
// if (subtitle) {
//     typeWriter(subtitle, 'AI Developer • Web Developer • Networking Enthusiast');
// }

// ========================================
// RESIZE HANDLER
// ========================================

window.addEventListener('resize', () => {
    // Handle responsive behavior if needed
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});
