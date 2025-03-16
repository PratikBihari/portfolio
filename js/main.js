// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Add scroll to top button styles
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 99;
    }
    
    .scroll-top-btn.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        background-color: var(--secondary-color);
        transform: translateY(-3px);
    }
    
    @media screen and (max-width: 576px) {
        .scroll-top-btn {
            width: 40px;
            height: 40px;
            bottom: 20px;
            right: 20px;
        }
    }
`;
document.head.appendChild(style);

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // In a real application, you would send the form data to a server here
        // For this demo, we'll just show a success message
        showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Function to show form submission messages
function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // Add to DOM
    const formBtn = document.querySelector('.contact-form button');
    formBtn.parentNode.insertBefore(messageElement, formBtn);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Add form message styles
const formStyle = document.createElement('style');
formStyle.textContent = `
    .form-message {
        padding: 12px;
        border-radius: var(--border-radius);
        margin-bottom: 20px;
        font-weight: 500;
    }
    
    .form-message.success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .form-message.error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
`;
document.head.appendChild(formStyle);

// Add scroll animation for elements
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .stat-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Add animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .project-card, .skill-category, .timeline-item, .stat-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .project-card.animate, .skill-category.animate, .timeline-item.animate, .stat-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item:nth-child(even) {
        transform: translateY(30px) translateX(30px);
    }
    
    .timeline-item:nth-child(odd) {
        transform: translateY(30px) translateX(-30px);
    }
    
    .timeline-item.animate:nth-child(even),
    .timeline-item.animate:nth-child(odd) {
        transform: translateY(0) translateX(0);
    }
`;
document.head.appendChild(animationStyle);

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);
// Run once on page load
window.addEventListener('load', animateOnScroll);

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active link style
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-links a.active {
        color: var(--accent-color);
    }
    
    .nav-links a.active::after {
        width: 100%;
        background-color: var(--accent-color);
    }
`;
document.head.appendChild(navStyle);

// Animate skill bars on scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-level');
    const skillSection = document.querySelector('.skills-section');
    
    if (skillSection) {
        const sectionPosition = skillSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (sectionPosition < screenPosition) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            // Remove event listener after animation
            window.removeEventListener('scroll', animateSkillBars);
        }
    }
};

// Run skill bar animation on scroll
window.addEventListener('scroll', animateSkillBars);

// Add parallax effect to hero section
const parallaxEffect = () => {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    
    if (header && scrollPosition < window.innerHeight) {
        header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
};

// Run parallax effect on scroll
window.addEventListener('scroll', parallaxEffect);

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero-content h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    const typeText = () => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    };
    
    // Start typing effect after a short delay
    setTimeout(typeText, 500);
}

// Add counter animation to stat numbers
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
    const targetValue = parseInt(stat.textContent);
    stat.textContent = '0';
    
    const animateCounter = () => {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            const sectionPosition = aboutSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (sectionPosition < screenPosition) {
                let currentValue = 0;
                const increment = targetValue / 50; // Divide animation into 50 steps
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue < targetValue) {
                        stat.textContent = Math.ceil(currentValue) + '+';
                    } else {
                        stat.textContent = targetValue + '+';
                        clearInterval(counter);
                    }
                }, 30);
                
                // Remove event listener after animation
                window.removeEventListener('scroll', animateCounter);
            }
        }
    };
    
    // Run counter animation on scroll
    window.addEventListener('scroll', animateCounter);
}); 