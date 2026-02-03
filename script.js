// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Scroll Reveal Animation
// ===================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Run on page load
revealOnScroll();

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
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

// ===================================
// Mobile Menu Toggle (Optional Enhancement)
// ===================================
// You can add a hamburger menu for mobile if needed
// This is a basic structure you can expand upon

const createMobileMenu = () => {
    const nav = document.querySelector('nav .container');
    const navList = document.querySelector('nav ul');
    
    // Create hamburger button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.style.display = 'none';
    
    // Add button to nav
    nav.appendChild(menuBtn);
    
    // Toggle menu on click
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('mobile-menu-active');
    });
    
    // Show/hide hamburger based on screen size
    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            menuBtn.style.display = 'block';
        } else {
            menuBtn.style.display = 'none';
            navList.classList.remove('mobile-menu-active');
        }
    };
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
};

// Initialize mobile menu
// createMobileMenu(); // Uncomment to enable

// ===================================
// Typing Effect for Hero Title (Optional)
// ===================================
/*
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Usage example:
// const heroTitle = document.querySelector('.hero h1');
// typeWriter(heroTitle, 'Latifa El Bouga', 100);
*/

// ===================================
// Parallax Effect on Scroll (Optional)
// ===================================
/*
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
    
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
*/

// ===================================
// Counter Animation for Stats
// ===================================
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Trigger counter animation when stats section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            
            // Find all stat numbers and animate them
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const text = stat.textContent;
                
                // Only animate if it's a number
                if (!isNaN(text)) {
                    const target = parseInt(text);
                    setTimeout(() => {
                        animateCounter(stat, target, 2000);
                    }, index * 200);
                }
            });
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// Form Validation (if you add a contact form)
// ===================================
/*
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Send form data (you'll need to implement the backend)
        console.log('Form submitted:', { name, email, message });
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
*/

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hello, curious developer!', 'color: #ff6b9d; font-size: 20px; font-weight: bold;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #c084fc; font-size: 14px;');
console.log('%cEmail: latifa.elbouga@um6p.ma', 'color: #60a5fa; font-size: 12px;');